import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Box,
    Typography,
    Container,
    withStyles
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import Copyright from "../../components/Copyright";
import { userLogin } from "../../actions/auth";

const useStyles = theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
});

class SignIn extends React.Component {
    username = React.createRef();
    password = React.createRef();

    login = e => {
        e.preventDefault();
        const username = this.username.current.value;
        const password = this.password.current.value;
        const body = {
            username,
            password,
            headers: {
                Authorization:
                    "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZDk5YzQ3ZWQwNWEyZTI4NGMyODBlYWQiLCJ1c2VybmFtZSI6IlBldHJvMjMiLCJ1c2VyIjp7Il9pZCI6IjVkOTljNDdlZDA1YTJlMjg0YzI4MGVhZCIsInVzZXJuYW1lIjoiUGV0cm8yMyIsInBhc3N3b3JkIjoiJDJhJDEwJE1yWHhiNGE0UXhSYmhjSm1tNW1sci5KL1dxZXhXcWFnQlV5Y2Z2bjh6dTNnVGwyRDAzem1TIiwiX192IjowfX0.KPIc0IcImBogOPFaqz6N9yuce-wIG8cFlPcpRbp4A2E"
            }
        };
        this.props.signIn("http://localhost:5000/api/auth/login", body);
    };

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={this.login}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            inputRef={this.username}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            inputRef={this.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs></Grid>
                            <Grid item>
                                <NavLink
                                    to="/signup"
                                    activeClassName="selected"
                                    style={{
                                        textDecoration: "none"
                                    }}
                                >
                                    Don't have an account? Sign Up
                                </NavLink>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}

const mapStateToProps = ({ token }) => ({
    token
});

const mapDispatchToProps = dispatch => ({
    signIn: (url, body) => dispatch(userLogin(url, body))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(useStyles)(SignIn));

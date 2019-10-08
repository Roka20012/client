import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

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

import Copyright from "../../components//Copyright";

import { userRegister } from "../../actions/auth";

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
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
});

class SignUp extends React.Component {
    username = React.createRef();
    password = React.createRef();
    confirmation = React.createRef();

    register = async e => {
        e.preventDefault();
        const username = this.username.current.value;
        const password = this.password.current.value;
        const confirmation = this.confirmation.current.value;

        const body = {
            username,
            password,
            confirmation
        };
        await this.props.signUp("http://localhost:5000/api/auth/register", body);
        this.props.history.push("/signin");
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
                        Sign up
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={this.register}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="username"
                                    label="Username"
                                    type="username"
                                    id="username"
                                    autoComplete="current-username"
                                    inputRef={this.username}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    inputRef={this.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password-confirmation"
                                    label="Password confirmation"
                                    type="password"
                                    id="password-confirmation"
                                    autoComplete="current-password-confirmation"
                                    inputRef={this.confirmation}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <NavLink
                                    to="/signin"
                                    activeClassName="selected"
                                    style={{
                                        textDecoration: "none"
                                    }}
                                >
                                    Already have an account? Sign in
                                </NavLink>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUp: (url, body) => dispatch(userRegister(url, body))
});

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(withStyles(useStyles)(SignUp))
);

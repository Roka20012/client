import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

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

const validate = values => {
    const errors = {};
    const requiredFields = ["name", "password"];
    requiredFields.forEach(field => {
        if (!values[field]) errors[field] = "Required";
    });
    return errors;
};

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

class SignIn extends React.Component {
    username = React.createRef();
    password = React.createRef();
    state = {
        name: ""
    };
    onInput = ({ target: { value } }) => {
        this.setState({
            name: value
        });
    };

    login = async e => {
        e.preventDefault();
        const username = this.username.current.value;
        const password = this.password.current.value;
        const body = {
            username,
            password,
            headers: {
                Authorization: localStorage.getItem("TOKEN")
            }
        };
        await this.props.signIn("http://localhost:5000/api/auth/login", body);
        this.props.history.push("/app");
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

export default reduxForm({
    form: "MaterialUiForm", // a unique identifier for this form
    validate
})(
    withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(withStyles(useStyles)(SignIn))
    )
);

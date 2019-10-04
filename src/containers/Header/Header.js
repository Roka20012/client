import React from "react";

import { NavLink } from "react-router-dom";

import {
    withStyles,
    AppBar,
    Toolbar,
    Typography,
    Button
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = theme => ({
    root: {
        margin: 0,
        padding: 0,
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    },
    submit: {
        margin: theme.spacing(1, .5, 1)
    }
});

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <CssBaseline>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Notes App
                            </Typography>

                            <NavLink
                                to="/signup"
                                activeClassName="selected"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                                className={classes.submit}
                                style={{
                                    textDecoration: "none",
                                    color: "#b0bec5"
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Sign Up
                                </Button>
                            </NavLink>

                            <NavLink
                                to="/signin"
                                activeClassName="selected"
                                className={classes.submit}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                                style={{
                                    textDecoration: "none",
                                    color: "#b0bec5"
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Sign In
                                </Button>
                            </NavLink>
                        </Toolbar>
                    </AppBar>
                </div>
            </CssBaseline>
        );
    }
}

export default withStyles(useStyles)(Header);

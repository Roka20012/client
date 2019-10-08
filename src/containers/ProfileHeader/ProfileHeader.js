import React from "react";

import { NavLink, withRouter } from "react-router-dom";

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
        margin: theme.spacing(1, 0.5, 1)
    }
});

class ProfileHeader extends React.Component {
    logOut = () => {
        localStorage.removeItem("TOKEN");
        this.props.history.push("/signin");
    };

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

                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                onClick={this.logOut}
                            >
                                Log Out
                            </Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </CssBaseline>
        );
    }
}

export default withRouter(withStyles(useStyles)(ProfileHeader));

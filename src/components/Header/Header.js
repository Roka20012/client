import React from "react";

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
                            <Button color="inherit">Sign Up</Button>
                            <Button color="inherit">Sign In</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </CssBaseline>
        );
    }
}

export default withStyles(useStyles)(Header);

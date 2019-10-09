import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
    withStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    MenuItem,
    Menu,
    IconButton,
    SwipeableDrawer
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";

import DraweSideList from "../../components/DrawerSideList";
import { getNotes } from "../../actions/notes";

const useStyles = theme => ({
    root: {
        margin: 0,
        padding: 0,
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    icon: {
        margin: theme.spacing(1, 1, 1)
    },
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
});

class ProfileHeader extends React.Component {
    anchorEl = null;

    state = {
        open: Boolean(this.anchorEl),
        drawerOpen: false
    };

    logOut = () => {
        localStorage.removeItem("TOKEN");
        this.props.history.push("/signin");
    };

    handleClose = e => {
        this.anchorEl = null;
        this.setState(prevState => ({
            open: Boolean(this.anchorEl)
        }));
    };

    toggleDrawer = e => {
        if (
            e &&
            e.type === "keydown" &&
            (e.key === "Tab" || e.key === "Shift")
        ) {
            return;
        }

        this.setState(prevState => ({ drawerOpen: !prevState.drawerOpen }));
    };

    handleMenu = ({ target }) => {
        this.anchorEl = target;
        this.setState(prevState => ({
            open: Boolean(this.anchorEl)
        }));
    };

    componentDidMount() {
        const body = {
            headers: {
                Authorization: localStorage.getItem("TOKEN")
            }
        };
        this.props.getNotes("http://localhost:5000/api/notes/", body);
    }

    render() {
        const { classes } = this.props;
        return (
            <CssBaseline>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <SwipeableDrawer
                                open={this.state.drawerOpen}
                                onClose={this.toggleDrawer}
                                onOpen={this.toggleDrawer}
                            >
                                <DraweSideList
                                    toggleDrawer={this.toggleDrawer}
                                />
                            </SwipeableDrawer>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={this.toggleDrawer}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Notes App
                            </Typography>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                className={classes.icon}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={this.anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={this.state.open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    My account
                                </MenuItem>
                            </Menu>
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

const mapStateToProps = ({ userNotes }) => ({
    userNotes
});

const mapDispatchToProps = dispatch => ({
    getNotes: (url, body) => dispatch(getNotes(url, body))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withStyles(useStyles)(ProfileHeader))
);

import React from "react";
import { connect } from "react-redux";
import {
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    AppBar,
    Toolbar,
    Fab,
    Tooltip,
    withStyles
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { createNote } from "../../actions/notes";

const useStyles = theme => ({
    appBar: {
        top: "auto",
        bottom: 0
    },
    fabButton: {
        position: "absolute",
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: "0 auto"
    }
});

class BottomAppBar extends React.Component {
    noteText = React.createRef();

    state = {
        open: false
    };

    handleToggleAddMenu = () => {
        this.setState(({ open }) => ({ open: !open }));
    };

    createNote = async e => {
        e.preventDefault();
        const text = this.noteText.current.value;

        await this.props.createNote("http://localhost:5000/api/notes/", {
            text
        });
        this.handleToggleAddMenu();
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Tooltip title="Add note" aria-label="add">
                        <Fab
                            color="secondary"
                            aria-label="add"
                            className={classes.fabButton}
                            onClick={this.handleToggleAddMenu}
                        >
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                    <Dialog
                        onClose={this.handleToggleAddMenu}
                        open={open}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">
                            Create Note
                        </DialogTitle>

                        <DialogContent>
                            <DialogContentText>
                                To create Note please fill this fileld and then
                                press CREATE
                            </DialogContentText>
                            <form onSubmit={this.createNote}>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="note"
                                    label="Note"
                                    type="text"
                                    fullWidth
                                    inputRef={this.noteText}
                                />
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={this.handleToggleAddMenu}
                                color="secondary"
                            >
                                Cancel
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.createNote}
                            >
                                Create
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createNote: (url, body) => dispatch(createNote(url, body))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(withStyles(useStyles)(BottomAppBar));

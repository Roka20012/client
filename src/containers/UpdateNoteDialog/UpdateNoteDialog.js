import React from "react";
import {
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button
} from "@material-ui/core";

class BottomAppBar extends React.Component {
    state = {
        noteText: this.props.text
    };

    handleInput = ({ target: { value: noteText } }) => {
        this.setState({
            noteText
        });
    };

    componentDidMount() {
        this.setState({
            noteText: this.props.text
        });
    }

    render() {
        const { open, handleToggleUpdateDialog, updateNote, id } = this.props;
        return (
            <Dialog
                onClose={handleToggleUpdateDialog}
                open={open}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Update Note</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        To update Note please fill this field and then press
                        UPDATE
                    </DialogContentText>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            updateNote(id, this.state.noteText);
                            handleToggleUpdateDialog();
                        }}
                    >
                        <TextField
                            autoFocus
                            margin="dense"
                            id="note"
                            label="Note"
                            type="text"
                            fullWidth
                            value={this.state.noteText}
                            onChange={this.handleInput}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleToggleUpdateDialog}
                        color="secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={async e => {
                            e.preventDefault();

                            await updateNote(id, this.state.noteText);
                            handleToggleUpdateDialog();
                        }}
                    >
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default BottomAppBar;

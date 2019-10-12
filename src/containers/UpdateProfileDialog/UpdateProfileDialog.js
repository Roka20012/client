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

class UpdateProfileDialog extends React.Component {
    state = {
        username: this.props.username
    };

    handleInput = ({ target: { value: username } }) => {
        this.setState({
            username
        });
    };

    componentDidMount() {
        this.setState({
            username: this.props.username
        });
    }

    render() {
        const { open, handleToggleUpdateDialog, updateProfile } = this.props;
        return (
            <Dialog
                onClose={handleToggleUpdateDialog}
                open={open}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Update Profile</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        To update Profile username please fill this field and
                        then press UPDATE
                    </DialogContentText>
                    <form
                        onSubmit={async e => {
                            e.preventDefault();
                            await updateProfile(this.state.username);
                            handleToggleUpdateDialog();
                        }}
                    >
                        <TextField
                            autoFocus
                            margin="dense"
                            id="note"
                            label="Username"
                            type="text"
                            fullWidth
                            value={this.state.username}
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
                            await updateProfile(this.state.username);
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

export default UpdateProfileDialog;

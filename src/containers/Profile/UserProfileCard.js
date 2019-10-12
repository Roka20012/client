import React from "react";
import {
    Tooltip,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
    IconButton,
    Zoom
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
    card: {
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardContent: {
        flexGrow: 1,
        wordBreak: "break-all"
    },
    buttons: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "flex-end"
    },
    center: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        width: "100%"
    }
});

class UserProfileCard extends React.Component {
    render() {
        const {
            classes,
            deleteProfile,
            handleToggleUpdateDialog,
            user: { username },
            notesCount
        } = this.props;
        return (
            <Grid item className={classes.center}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent} wrap="wrap">
                        <Grid>
                            <Typography variant="h4" gutterBottom>
                                Username: {username ? username : "loading..."}
                            </Typography>
                        </Grid>
                    </CardContent>
                    <CardContent className={classes.cardContent} wrap="wrap">
                        <Grid>
                            <Typography variant="h4" gutterBottom>
                                Notes count: {notesCount}
                            </Typography>
                        </Grid>
                    </CardContent>
                    <CardActions className={classes.buttons}>
                        <Tooltip
                            title="Edit username"
                            TransitionComponent={Zoom}
                        >
                            <IconButton
                                aria-label="edit"
                                onClick={() =>
                                    handleToggleUpdateDialog(username)
                                }
                            >
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip
                            title="Delete profile"
                            TransitionComponent={Zoom}
                        >
                            <IconButton
                                aria-label="delete"
                                onClick={deleteProfile}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(UserProfileCard);

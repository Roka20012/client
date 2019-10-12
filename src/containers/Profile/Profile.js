import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    CssBaseline,
    Grid,
    Typography,
    Container,
    withStyles
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import UserProfileCard from "./UserProfileCard";
import { deleteProfile, updateProfile } from "../../actions/users";
import UpdateProfileDialog from "../UpdateProfileDialog";

const useStyles = theme => ({
    cardGrid: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(14)
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardContent: {
        flexGrow: 1,
        display: "flex",
        margin: theme.spacing(1)
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0, 2)
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end"
    }
});

const loadItem = [1];

class Profile extends React.Component {
    state = {
        open: false
    };

    handleToggleUpdateDialog = username => {
        this.setState(({ open }) => ({ open: !open, username }));
    };

    updateProfile = async username => {
        await this.props.updateProfile(username);
        this.handleToggleAddMenu();
    };

    render() {
        const {
            classes,
            loaded,
            deleteProfile,
            updateProfile,
            user,
            notesCount,
            history
        } = this.props;

        return (
            <>
                <CssBaseline />
                <Container maxWidth="xl" className={classes.heroContent}>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        Your profile
                    </Typography>
                </Container>
                <main>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {loaded ? (
                                <UserProfileCard
                                    key={user._id}
                                    deleteProfile={async () => {
                                        await deleteProfile();
                                        history.push("/signin");
                                    }}
                                    handleToggleUpdateDialog={
                                        this.handleToggleUpdateDialog
                                    }
                                    user={user}
                                    notesCount={notesCount}
                                />
                            ) : (
                                loadItem.map((item, id) => (
                                    <Skeleton
                                        variant="rect"
                                        width={150}
                                        height={250}
                                        key={id}
                                        className={classes.cardContent}
                                    />
                                ))
                            )}
                        </Grid>
                    </Container>
                </main>
                {this.state.open && (
                    <UpdateProfileDialog
                        open={this.state.open}
                        handleToggleUpdateDialog={this.handleToggleUpdateDialog}
                        updateProfile={updateProfile}
                        username={this.state.username}
                    />
                )}
                />
            </>
        );
    }
}

const mapStateToProps = ({ user, loaded, userNotes }) => ({
    user,
    loaded,
    notesCount: userNotes.length
});

const mapDispatchToProps = dispatch => ({
    deleteProfile: () => dispatch(deleteProfile()),
    updateProfile: username => dispatch(updateProfile(username))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withStyles(useStyles)(Profile))
);

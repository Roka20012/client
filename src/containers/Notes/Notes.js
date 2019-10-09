import React from "react";
import { connect } from "react-redux";
import {
    Tooltip,
    Card,
    CardActions,
    CardContent,
    CssBaseline,
    Grid,
    Typography,
    Container,
    IconButton,
    Zoom
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";
import Copyright from "../../components/Copyright";

const useStyles = theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0, 2)
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end"
    },
    date: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        marginRight: theme.spacing(5.3)
    }
});

// const notes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Notes extends React.Component {
    render() {
        const { classes, notes } = this.props;

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
                        My Notes
                    </Typography>
                </Container>
                <main>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {notes.map(
                                ({ _id: id, text, createDate: date }) => (
                                    <Grid item key={id} xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardContent
                                                className={classes.cardContent}
                                            >
                                                <Typography>{text}</Typography>
                                            </CardContent>

                                            <CardActions
                                                className={classes.buttons}
                                            >
                                                <CardContent
                                                    className={classes.date}
                                                >
                                                    <Typography>
                                                        {new Date(
                                                            date
                                                        ).toLocaleDateString()}
                                                    </Typography>
                                                </CardContent>
                                                <Tooltip
                                                    title="Edit"
                                                    TransitionComponent={Zoom}
                                                >
                                                    <IconButton aria-label="edit">
                                                        <EditIcon />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip
                                                    title="Delete"
                                                    TransitionComponent={Zoom}
                                                >
                                                    <IconButton aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            )}
                        </Grid>
                    </Container>
                </main>
                <footer className={classes.footer}>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="textSecondary"
                        component="p"
                    >
                        Notes App
                    </Typography>
                    <Copyright />
                </footer>
            </>
        );
    }
}

const mapStateToProps = ({ userNotes }) => ({
    notes: userNotes
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(useStyles)(Notes));

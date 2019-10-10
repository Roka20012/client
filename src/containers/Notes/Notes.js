import React from "react";
import { connect } from "react-redux";
import { CssBaseline, Grid, Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Note from "./Note";
import { deleteNote } from "../../actions/notes";
import Skeleton from "@material-ui/lab/Skeleton";

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
    },
    date: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        marginRight: theme.spacing(5.3)
    }
});

const loadItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Notes extends React.Component {
    render() {
        const { classes, notes, loaded, deleteNote } = this.props;

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
                            {loaded
                                ? notes.map(note => (
                                      <Note
                                          key={note._id}
                                          deleteNote={() =>
                                              deleteNote(note._id)
                                          }
                                          {...note}
                                      />
                                  ))
                                : loadItem.map((item, id) => (
                                      <Skeleton
                                          variant="rect"
                                          width={210}
                                          height={148}
                                          key={id}
                                          className={classes.cardContent}
                                      />
                                  ))}
                        </Grid>
                    </Container>
                </main>
            </>
        );
    }
}

const mapStateToProps = ({ userNotes, loaded }) => ({
    notes: userNotes,
    loaded
});

const mapDispatchToProps = dispatch => ({
    deleteNote: id => dispatch(deleteNote(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(useStyles)(Notes));

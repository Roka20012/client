import React from "react";
import { connect } from "react-redux";
import {
    CssBaseline,
    Grid,
    Typography,
    Container,
    CircularProgress,
    withStyles
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import User from "./User";
import { getUsers } from "../../actions/users";

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
    }
});

const loadItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class Users extends React.Component {
    async componentDidMount() {
        if (this.props.users.length === 0) await this.props.getUsers();
    }

    render() {
        const { classes, users, loaded } = this.props;

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
                        We have{" "}
                        {(loaded && users.length) || (
                            <CircularProgress className={classes.progress} />
                        )}{" "}
                        users
                    </Typography>
                </Container>
                <main>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {loaded
                                ? users.map(user => (
                                      <User key={user._id} {...user} />
                                  ))
                                : loadItem.map((item, id) => (
                                      <Skeleton
                                          variant="rect"
                                          width={250}
                                          height={148}
                                          key={id}
                                          className={classes.cardContent}
                                      />
                                  ))}
                        </Grid>
                    </Container>
                </main>
                />
            </>
        );
    }
}

const mapStateToProps = ({ users, loaded }) => ({
    users,
    loaded
});

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(useStyles)(Users));

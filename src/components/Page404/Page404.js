import React from "react";
import { Link } from "react-router-dom";

import { Button, Typography, withStyles, Paper } from "@material-ui/core";

const useStyles = theme => ({
    root: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
});

class Page404 extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Typography
                    variant="h1"
                    component="h1"
                    fontWeight={500}
                    color="primary"
                >
                    Page not found 404
                </Typography>
                <Link
                    className={classes.root}
                    to="/signin"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    <Button type="submit" variant="contained" color="secondary">
                        Go to Sign In page
                    </Button>
                </Link>
            </Paper>
        );
    }
}

export default withStyles(useStyles)(Page404);

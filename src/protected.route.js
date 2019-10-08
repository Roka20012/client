import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, token, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                console.log("props is", props);
                const TOKEN = localStorage.getItem("TOKEN");
                console.log("TOKEN is", TOKEN);
                if (TOKEN) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

const mapStateToProps = ({ token }) => ({
    token
});

export default connect(mapStateToProps)(ProtectedRoute);

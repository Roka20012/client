import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                const TOKEN = localStorage.getItem("TOKEN");
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

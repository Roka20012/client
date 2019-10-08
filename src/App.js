import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";

import configureStore from "./store/configureStore";

import Header from "./containers/Header";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import ProfileHeader from "./containers/ProfileHeader";
import Page404 from "./components/Page404";
import ProtectedRoute from "./protected.route";

import "./App.css";

const store = configureStore();
store.subscribe = () => {
    console.log(store.getState());
    localStorage.removeItem("TOKEN");
};

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route
                            path="/signin"
                            exact
                            render={props => (
                                <>
                                    <Header />
                                    <SignIn />
                                </>
                            )}
                        />
                        <Route
                            path="/signup"
                            render={props => (
                                <>
                                    <Header />
                                    <SignUp />
                                </>
                            )}
                        />
                        <ProtectedRoute
                            exact
                            path="/app"
                            component={ProfileHeader}
                        />

                        <Route path="*" component={Page404} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;

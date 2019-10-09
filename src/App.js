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
import Notes from "./containers/Notes";

import "./App.css";

const store = configureStore();

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
                            path="/app"
                            component={props => (
                                <>
                                    <ProfileHeader />
                                    <Notes />
                                </>
                            )}
                        />

                        <Route path="*">
                            <Page404 />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;

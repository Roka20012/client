import React from "react";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import "typeface-roboto";

import configureStore from "./store/configureStore";

import Header from "./containers/Header";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import ProfileHeader from "./containers/ProfileHeader";
import Page404 from "./components/Page404";
import ProtectedRoute from "./protected.route";
import Notes from "./containers/Notes";
import BottomAppBar from "./containers/BottomAppBar";
import Users from "./containers/Users";
import Profile from "./containers/Profile";

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
                            path="/app/mynotes"
                            component={props => (
                                <>
                                    <ProfileHeader />
                                    <Notes />
                                    <BottomAppBar />
                                </>
                            )}
                        />
                        <ProtectedRoute
                            path="/app/allusers"
                            component={props => (
                                <>
                                    <ProfileHeader />
                                    <Users />
                                    <BottomAppBar />
                                </>
                            )}
                        />
                        <ProtectedRoute
                            path="/app/profile"
                            component={props => (
                                <>
                                    <ProfileHeader />
                                    <Profile />
                                    <BottomAppBar />
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

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";

import configureStore from "./store/configureStore";

import Header from "./containers/Header";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import Page404 from "./components/Page404";

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

                        <Route component={Page404} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;

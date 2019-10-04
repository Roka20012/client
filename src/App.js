import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "typeface-roboto";

import configureStore from "./store/configureStore";

import MainPage from "./components/MainPage";

import "./App.css";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Route path="/" exact component={MainPage} />
                </div>
            </Router>
        </Provider>
    );
}

export default App;

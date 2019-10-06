import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import thunk from "redux-thunk";
import rootReducer from "../reducers";

const logger = createLogger({
    // ...options
});

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}

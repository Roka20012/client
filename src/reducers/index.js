import { combineReducers } from "redux";

import { notes } from "./notes";
import { userLogin, userRegister } from "./auth";
import { loaded } from "./loaded";

export default combineReducers({
    userNotes: notes,
    token: userLogin,
    user: userRegister,
    loaded
});

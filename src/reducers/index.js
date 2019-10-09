import { combineReducers } from "redux";

import { notes } from "./notes";
import { userLogin, userRegister } from "./auth";

export default combineReducers({
    userNotes: notes,
    token: userLogin,
    user: userRegister
});

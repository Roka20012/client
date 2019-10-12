import { combineReducers } from "redux";

import { notes } from "./notes";
import { loaded } from "./loaded";
import { user, users } from "./users";

export default combineReducers({
    userNotes: notes,
    user,
    users,
    loaded
});

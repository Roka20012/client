import axios from "axios";

import { GET_USER_NOTES } from "../constants";

export const getNotesSuccess = notes => ({
    type: GET_USER_NOTES,
    payload: {
        notes
    }
});

export const getNotes = (url, body) => async dispatch => {
    try {
        const response = await axios(url, body);
        const notes = response.data;

        dispatch(getNotesSuccess(notes));
    } catch (err) {
        console.log("error", err);
    }
};

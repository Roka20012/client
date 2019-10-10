import axios from "axios";

import {
    GET_USER_NOTES,
    CREATE_USER_NOTE,
    DELETE_USER_NOTE
} from "../constants";
import { loaded } from "./loaded";

export const getNotesSuccess = notes => ({
    type: GET_USER_NOTES,
    payload: {
        notes
    }
});

export const createNewNoteSuccess = note => ({
    type: CREATE_USER_NOTE,
    payload: {
        note
    }
});

export const deleteNoteSuccess = id => ({
    type: DELETE_USER_NOTE,
    payload: {
        id
    }
});

export const getNotes = (url, body) => async dispatch => {
    try {
        dispatch(loaded(false));
        const response = await axios(url, body);
        const notes = response.data;
        dispatch(getNotesSuccess(notes));
        dispatch(loaded(true));
    } catch (err) {
        console.log("error", err);
    }
};

export const createNote = (url, body) => async dispatch => {
    try {
        const response = await axios.post(url, body, {
            headers: {
                Authorization: localStorage.getItem("TOKEN")
            }
        });
        console.log("response is", response);
        const note = response.data;
        dispatch(createNewNoteSuccess(note));
    } catch (err) {
        console.log("error", err);
    }
};

export const deleteNote = id => async dispatch => {
    try {
        const response = await axios.delete(
            `http://localhost:5000/api/notes/${id}`,
            {
                headers: {
                    Authorization: localStorage.getItem("TOKEN")
                }
            }
        );
        console.log("response is", response);
        dispatch(deleteNoteSuccess(id));
    } catch (err) {
        console.log("error", err);
    }
};

import axios from "axios";

import { GET_USER_NOTES } from "../constants";
const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZDk3NDVjMmQ3NzUzZjM0Mzg1Y2FiNGUiLCJ1c2VybmFtZSI6InJva2EyMDAxMiIsInVzZXIiOnsiX2lkIjoiNWQ5NzQ1YzJkNzc1M2YzNDM4NWNhYjRlIiwidXNlcm5hbWUiOiJyb2thMjAwMTIiLCJwYXNzd29yZCI6IiQyYSQxMCRaZHJySHRiOWdpMHlGRWJDWmdRMnZ1dmI4Nks3RW9taUV3NzRsNllub2h6NWgzL0FxLlpCMiIsIl9fdiI6MH19.rhC8m5iKBzSYqHwzESVl0vTd5GjusttUbO5eUvbGmtc";

export const getNotesSuccess = notes => ({
    type: GET_USER_NOTES,
    payload: {
        notes
    }
});

export const getNotes = (url, token) => async dispatch => {
    try {
        const response = await axios(url, {
            headers: {
                Authorization: token
            }
        });
        const notes = response.data;

        dispatch(getNotesSuccess(notes));
    } catch (err) {
        console.log("error", err);
    }
};

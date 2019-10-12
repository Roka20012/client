import axios from "axios";
import { loaded } from "./loaded";

import { GET_USER, DELETE_USER, UPDATE_USER, GET_USERS } from "../constants";

export const getUserSuccess = user => ({
    type: GET_USER,
    payload: {
        user
    }
});

export const getUsersSuccess = users => ({
    type: GET_USERS,
    payload: {
        users
    }
});

export const updateProfileSuccess = username => ({
    type: UPDATE_USER,
    payload: {
        username
    }
});

export const getUser = () => async dispatch => {
    try {
        const headers = {
            Authorization: localStorage.getItem("TOKEN")
        };
        const response = await axios("http://localhost:5000/api/users/user", {
            headers
        });
        const user = response.data;
        dispatch(getUserSuccess(user));
    } catch (err) {
        console.log("error", err);
    }
};

export const getUsers = () => async dispatch => {
    try {
        dispatch(loaded(false));
        const headers = {
            Authorization: localStorage.getItem("TOKEN")
        };
        const response = await axios("http://localhost:5000/api/users/", {
            headers
        });
        const users = response.data;
        console.log("users is", users);
        dispatch(getUsersSuccess(users));
        dispatch(loaded(true));
    } catch (err) {
        console.log("error", err);
    }
};

export const deleteProfile = () => async dispatch => {
    try {
        // dispatch(loaded(false));
        const headers = {
            Authorization: localStorage.getItem("TOKEN")
        };
        const response = await axios.delete(
            "http://localhost:5000/api/users/user",
            {
                headers
            }
        );

        console.log("response is", response);

        // dispatch(loaded(true));
    } catch (err) {
        console.log("error", err);
    }
};

export const updateProfile = username => async dispatch => {
    try {
        console.log("username is", username);
        // dispatch(loaded(false));
        const headers = {
            Authorization: localStorage.getItem("TOKEN")
        };
        await axios.put(
            "http://localhost:5000/api/users/user",
            { username },
            {
                headers
            }
        );

        dispatch(updateProfileSuccess(username));
        // dispatch(loaded(true));
    } catch (err) {
        console.log("error", err);
    }
};

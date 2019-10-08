import axios from "axios";

import { LOGIN_USER, REGISTER_USER } from "../constants";

export const userLoginSuccess = token => ({
    type: LOGIN_USER,
    payload: {
        token
    }
});

export const userRegisterSuccess = user => ({
    type: REGISTER_USER,
    payload: {
        user
    }
});

export const userLogin = (url, body) => async dispatch => {
    try {
        const response = await axios.post(url, body);
        const token = response.data;

        dispatch(userLoginSuccess(token));
        
    } catch (err) {
        console.log("error", err);
    }
};

export const userRegister = (url, body) => async dispatch => {
    try {
        const response = await axios.post(url, body);
        const user = response.data;

        dispatch(userRegisterSuccess(user));
    } catch (err) {
        console.log("error", err);
    }
};

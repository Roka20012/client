import axios from "axios";

export const userLogin = (url, body) => async dispatch => {
    try {
        const response = await axios.post(url, body);
        const token = response.data;
        localStorage.setItem("TOKEN", token);
    } catch (err) {
        console.log("error", err);
    }
};

export const userRegister = (url, body) => async dispatch => {
    try {
        await axios.post(url, body);
    } catch (err) {
        console.log("error", err);
    }
};

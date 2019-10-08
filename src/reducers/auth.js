import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from "../constants";

export const userLogin = (state = null, { type, payload }) => {
    switch (type) {
        case LOGIN_USER:
            localStorage.setItem("TOKEN", payload.token);
            return payload.token;
        case LOGOUT_USER:
            localStorage.removeItem("TOKEN");
            return null;
        default:
            return state;
    }
};

export const userRegister = (state = null, { type, payload }) => {
    switch (type) {
        case REGISTER_USER:
            return payload.user;
        default:
            return state;
    }
};

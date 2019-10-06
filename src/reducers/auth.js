import { LOGIN_USER, REGISTER_USER } from "../constants";

export const userLogin = (state = null, { type, payload }) => {
    switch (type) {
        case LOGIN_USER:
            return payload.token;
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

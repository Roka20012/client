import { GET_USER, GET_USERS, UPDATE_USER } from "../constants";

export const user = (state = "", { type, payload }) => {
    switch (type) {
        case GET_USER:
            return payload.user;
        case UPDATE_USER:
            return {
                ...state,
                username: payload.username
            };
        default:
            return state;
    }
};

export const users = (state = [], { type, payload }) => {
    switch (type) {
        case GET_USERS:
            return payload.users;
        default:
            return state;
    }
};

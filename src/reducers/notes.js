import { GET_USER_NOTES } from "../constants";

export const notes = (state = [], { type, payload }) => {
    switch (type) {
        case GET_USER_NOTES:
            return payload.notes;
        default:
            return state;
    }
};

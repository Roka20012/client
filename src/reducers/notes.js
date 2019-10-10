import {
    GET_USER_NOTES,
    CREATE_USER_NOTE,
    DELETE_USER_NOTE
} from "../constants";

export const notes = (state = [], { type, payload }) => {
    switch (type) {
        case GET_USER_NOTES:
            return payload.notes;
        case CREATE_USER_NOTE:
            return [...state, payload.note];
        case DELETE_USER_NOTE:
            return state.filter(note => note._id !== payload.id);
        default:
            return state;
    }
};

import {
    GET_USER_NOTES,
    CREATE_USER_NOTE,
    DELETE_USER_NOTE,
    UPDATE_USER_NOTE
} from "../constants";

export const notes = (state = [], { type, payload }) => {
    switch (type) {
        case GET_USER_NOTES:
            return payload.notes;
        case CREATE_USER_NOTE:
            return [...state, payload.note];
        case DELETE_USER_NOTE:
            return state.filter(note => note._id !== payload.id);
        case UPDATE_USER_NOTE:
            return state.map(el =>
                el._id === payload.id ? { ...el, text: payload.text } : el
            );
        default:
            return state;
    }
};

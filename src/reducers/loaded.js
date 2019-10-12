import { LOADED } from "../constants";

export const loaded = (state = false, { type, payload }) => {
    switch (type) {
        case LOADED:
            return payload.loaded;
        default:
            return state;
    }
};

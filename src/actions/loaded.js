import { LOADED } from "../constants";

export const loaded = loaded => ({
    type: LOADED,
    payload: {
        loaded
    }
});

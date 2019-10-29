import { ERROR } from "../constants";

export const error = error => ({
    type: ERROR,
    payload: {
        error
    }
});
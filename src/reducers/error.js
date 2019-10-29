import { ERROR } from '../constants';

export const error = (state = false, { type, payload }) => {
	switch (type) {
		case ERROR:
			return payload.error;
		default:
			return state;
	}
};

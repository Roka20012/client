import axios from 'axios';

import {
	GET_USER_NOTES,
	CREATE_USER_NOTE,
	DELETE_USER_NOTE,
	UPDATE_USER_NOTE
} from '../constants';
import { loaded } from './loaded';
import { error } from './error';

export const getNotesSuccess = notes => ({
	type: GET_USER_NOTES,
	payload: {
		notes
	}
});

export const createNewNoteSuccess = note => ({
	type: CREATE_USER_NOTE,
	payload: {
		note
	}
});

export const deleteNoteSuccess = id => ({
	type: DELETE_USER_NOTE,
	payload: {
		id
	}
});

export const updateNoteSuccess = (id, text) => ({
	type: UPDATE_USER_NOTE,
	payload: {
		id,
		text
	}
});

export const getNotes = () => async dispatch => {
	try {
		dispatch(loaded(false));
		dispatch(error(false));
		const body = {
			headers: {
				Authorization: localStorage.getItem('TOKEN')
			}
		};

		const response = await axios('http://localhost:5000/api/notes/', body);
		const notes = response.data;
		dispatch(getNotesSuccess(notes));
		dispatch(loaded(true));
	} catch (err) {
		dispatch(error(true));
		console.log('error', err);
	}
};

export const createNote = (url, body) => async dispatch => {
	try {
		dispatch(error(false));
		const response = await axios.post(url, body, {
			headers: {
				Authorization: localStorage.getItem('TOKEN')
			}
		});
		console.log('response is', response);
		const note = response.data;
		dispatch(createNewNoteSuccess(note));
	} catch (err) {
		dispatch(error(true));
		console.log('error', err);
	}
};

export const deleteNote = id => async dispatch => {
	try {
		dispatch(error(false));
		const response = await axios.delete(
			`http://localhost:5000/api/notes/${id}`,
			{
				headers: {
					Authorization: localStorage.getItem('TOKEN')
				}
			}
		);
		console.log('response is', response);
		dispatch(deleteNoteSuccess(id));
	} catch (err) {
		dispatch(error(true));
		console.log('error', err);
	}
};

export const updateNote = (id, text) => async dispatch => {
	try {
		dispatch(error(false));
		const response = await axios.put(
			`http://localhost:5000/api/notes/${id}`,
			{ text },
			{
				headers: {
					Authorization: localStorage.getItem('TOKEN')
				}
			}
		);
		console.log('response is', response);
		dispatch(updateNoteSuccess(id, text));
	} catch (err) {
		dispatch(error(true));
		console.log('error', err);
	}
};

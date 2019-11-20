import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import {
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
	AppBar,
	Toolbar,
	Fab,
	Tooltip,
	makeStyles
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { createNote } from '../../actions/notes';

const useStyles = makeStyles(theme => ({
	appBar: {
		top: 'auto',
		bottom: 0
	},
	fabButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto'
	}
}));

const BottomAppBar = props => {
	const noteText = useRef(null);
	const [open, setOpen] = useState(false);
	const classes = useStyles();

	const handleToggleAddMenu = () => {
		setOpen(open => !open);
	};

	const createNote = async e => {
		e.preventDefault();
		const text = noteText.current.value;

		await props.createNote('http://localhost:5000/api/notes/', {
			text
		});
		handleToggleAddMenu();
	};

	return (
		<AppBar position='fixed' color='primary' className={classes.appBar}>
			<Toolbar>
				<Tooltip title='Add note' aria-label='add'>
					<Fab
						color='secondary'
						aria-label='add'
						className={classes.fabButton}
						onClick={handleToggleAddMenu}
					>
						<AddIcon />
					</Fab>
				</Tooltip>
				<Dialog
					onClose={handleToggleAddMenu}
					open={open}
					aria-labelledby='form-dialog-title'
				>
					<DialogTitle id='form-dialog-title'>Create Note</DialogTitle>

					<DialogContent>
						<DialogContentText>
							To create Note please fill this fileld and then press CREATE
						</DialogContentText>
						<form onSubmit={createNote}>
							<TextField
								autoFocus
								margin='dense'
								id='note'
								label='Note'
								type='text'
								fullWidth
								inputRef={noteText}
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleToggleAddMenu} color='secondary'>
							Cancel
						</Button>
						<Button color='primary' variant='contained' onClick={createNote}>
							Create
						</Button>
					</DialogActions>
				</Dialog>
			</Toolbar>
		</AppBar>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		createNote: (url, body) => dispatch(createNote(url, body))
	};
};

export default connect(null, mapDispatchToProps)(BottomAppBar);

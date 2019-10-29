import React from 'react';
import { connect } from 'react-redux';
import {
	CssBaseline,
	Grid,
	Typography,
	Container,
	CircularProgress,
	withStyles
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Note from './Note';
import { deleteNote, updateNote } from '../../actions/notes';
import UpdateNoteDialog from '../UpdateNoteDialog';

const useStyles = theme => ({
	cardGrid: {
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(14)
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	cardContent: {
		flexGrow: 1,
		display: 'flex',
		margin: theme.spacing(1)
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(4, 0, 2)
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	date: {
		display: 'flex',
		justifyContent: 'flex-start',
		width: '100%',
		marginRight: theme.spacing(5.3)
	}
});

const loadItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class Notes extends React.Component {
	state = {
		open: false
	};

	handleToggleUpdateDialog = (id, text) => {
		this.setState(({ open }) => ({ open: !open, id, text }));
	};

	updateNote = async (id, text) => {
		await this.props.updateNote(id, text);
		this.handleToggleAddMenu();
	};

	render() {
		const {
			classes,
			notes,
			loaded,
			error,
			deleteNote,
			updateNote
		} = this.props;

		if (error)
			return (
				<Container maxWidth='xl' className={classes.heroContent}>
					<Typography
						component='h1'
						variant='h2'
						align='center'
						color='textPrimary'
						gutterBottom
					>
						Oop's something went wrong -_-
					</Typography>
				</Container>
			);

		return (
			<>
				<CssBaseline />
				<Container maxWidth='xl' className={classes.heroContent}>
					<Typography
						component='h1'
						variant='h2'
						align='center'
						color='textPrimary'
						gutterBottom
					>
						You have{' '}
						{loaded && notes.length >= 0 ? (
							notes.length
						) : (
							<CircularProgress className={classes.progress} />
						)}{' '}
						notes
					</Typography>
				</Container>
				<main>
					<Container className={classes.cardGrid} maxWidth='md'>
						<Grid container spacing={4}>
							{loaded
								? notes.map(note => (
										<Note
											key={note._id}
											deleteNote={() => deleteNote(note._id)}
											handleToggleUpdateDialog={this.handleToggleUpdateDialog}
											{...note}
										/>
								  ))
								: loadItem.map((item, id) => (
										<Skeleton
											variant='rect'
											width={250}
											height={148}
											key={id}
											className={classes.cardContent}
										/>
								  ))}
						</Grid>
					</Container>
				</main>
				{this.state.open && (
					<UpdateNoteDialog
						open={this.state.open}
						handleToggleUpdateDialog={this.handleToggleUpdateDialog}
						updateNote={updateNote}
						id={this.state.id}
						text={this.state.text}
					/>
				)}
			</>
		);
	}
}

const mapStateToProps = ({ userNotes, loaded, error }) => ({
	notes: userNotes,
	loaded,
	error
});

const mapDispatchToProps = dispatch => ({
	deleteNote: id => dispatch(deleteNote(id)),
	updateNote: (id, text) => dispatch(updateNote(id, text))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(useStyles)(Notes));

import React from 'react';
import {
	Tooltip,
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
	IconButton,
	Zoom,
	makeStyles
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
	card: {
		position: 'relative',
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	cardContent: {
		flexGrow: 1,
		wordBreak: 'break-all'
	},
	buttons: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'flex-end'
	},
	date: {
		position: 'absolute',
		left: 0
	}
}));

const Note = props => {
	const classes = useStyles();
	const {
		_id: id,
		text,
		createDate: date,
		deleteNote,
		handleToggleUpdateDialog
	} = props;
	return (
		<Grid item key={id} xs={12} sm={6} md={4}>
			<Card className={classes.card}>
				<CardContent className={classes.cardContent} wrap='wrap'>
					<Grid>
						<Typography>{text}</Typography>
					</Grid>
				</CardContent>
				<CardActions className={classes.buttons}>
					<CardContent className={classes.date}>
						<Typography>{new Date(date).toLocaleDateString()}</Typography>
					</CardContent>
					<Tooltip title='Edit' TransitionComponent={Zoom}>
						<IconButton
							aria-label='edit'
							onClick={() => handleToggleUpdateDialog(id, text)}
						>
							<EditIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title='Delete' TransitionComponent={Zoom}>
						<IconButton aria-label='delete' onClick={deleteNote}>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Note;

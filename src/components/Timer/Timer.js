import React, { useState, useEffect } from 'react';
import {
	Typography,
	IconButton,
	makeStyles,
	Tooltip,
	Zoom,
	CssBaseline
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles(theme => ({
	root: {
		margin: '0 20px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
}));

const Timer = () => {
	const [count, setCount] = useState(0);
	const classes = useStyles();

	useEffect(() => {
		const timerId = setInterval(() => setCount(count => ++count), 1000);

		return () => clearInterval(timerId);
	});

	return (
		<CssBaseline>
			<div className={classes.root}>
				<Tooltip title='timer' TransitionComponent={Zoom}>
					<IconButton edge='start' color='inherit' aria-label='timer'>
						<AccessTimeIcon />
					</IconButton>
				</Tooltip>
				<Typography variant='h6'>{count}</Typography>
			</div>
		</CssBaseline>
	);
};

export default Timer;

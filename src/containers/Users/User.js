import React from 'react';
import {
	Card,
	CardContent,
	Grid,
	Typography,
	makeStyles
} from '@material-ui/core';

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
	}
}));

const User = ({ username, notes }) => {
    const classes = useStyles();
    
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card className={classes.card}>
				<CardContent className={classes.cardContent} wrap='wrap'>
					<Grid>
						<Typography>{username}</Typography>
					</Grid>
				</CardContent>
				<CardContent className={classes.cardContent} wrap='wrap'>
					<Grid>
						<Typography>
							{notes ? `User have ${notes} notes` : "User don't have any notes"}
						</Typography>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default User;

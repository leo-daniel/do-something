import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const styles = theme => ({
	footer: {
		marginTop: theme.spacing.unit * 8,
		borderTop: `1px solid ${theme.palette.divider}`,
		padding: `${theme.spacing.unit * 6}px 0`,
	},
});

const footers = [
	{
		title: 'Company',
		description: ['Team', 'History', 'Contact us', 'Locations'],
	},
	{
		title: 'Features',
		description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
	},
	{
		title: 'Resources',
		description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
	},
	{
		title: 'Legal',
		description: ['Privacy policy', 'Terms of use'],
	},
];

function Footer(props) {
	return (
		<footer className={classNames(classes.footer, classes.layout)}>
			<Grid container spacing={32} justify="space-evenly">
				{footers.map(footer => (
					<Grid item xs key={footer.title}>
						<Typography variant="title" color="textPrimary" gutterBottom>
							{footer.title}
						</Typography>
						{footer.description.map(item => (
							<Typography key={item} variant="subheading" color="textSecondary">
								{item}
							</Typography>
						))}
					</Grid>
				))}
			</Grid>
		</footer>
	);
}

export default Footer;

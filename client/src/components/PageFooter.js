import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// Placeholder icons
import Email from '@material-ui/icons/Email';
import Forum from '@material-ui/icons/Forum';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';

const styles = theme => ({
	layout: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
			width: 1100,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		marginTop: theme.spacing.unit * 8,
		padding: `${theme.spacing.unit * 6}px 0`,
	},
	icon: {
		marginTop: theme.spacing.unit,
		marginLeft: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit,
		fontSize: 24,
	},
});

function PageFooter(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<CssBaseline />
			<div className={classes.layout}>
				<footer className={classes.footer}>
					<Typography variant="title" align="center">
						Do Something
					</Typography>
					<Typography align="center">
						<Email className={classes.icon} />
						<Forum className={classes.icon} />
						<ThumbUpAlt className={classes.icon} />
					</Typography>
					<Typography variant="subheading" align="center" color="textSecondary" component="p">
						&copy; 2018 - <a href="https://github.com/gbremble">Bremble</a> |{' '}
						<a href="https://github.com/mickburgess">Burgess</a> | <a href="url">Daniel</a> |{' '}
						<a href="https://github.com/rscottjohnson">Johnson</a> |{' '}
						<a href="https://github.com/merinogeospatial">Merino</a>
					</Typography>
				</footer>
			</div>
		</React.Fragment>
	);
}

PageFooter.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageFooter);

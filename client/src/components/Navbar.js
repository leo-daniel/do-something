import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import logo from './logo.png'

// Items not currently being used
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';

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
	toolbarMain: {
		borderBottom: `1px solid ${theme.palette.grey[300]}`,
	},
	toolbarTitle: {
		flex: 1,
	},
	toolbarSecondary: {
		justifyContent: 'space-between',
	},
	home: {
		textDecoration: 'none',
		color: '#000',
	},
});

// TODD: turn these into links to other routes/pages
const sections = ['Resources', 'Get Involved', 'Opportunities', 'About', 'Blog'];

function Navbar(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<CssBaseline />
			<div className={classes.layout}>
				<Toolbar className={classes.toolbarMain}>
					<Button variant="outlined" size="small" href="/">
						FAQs
					</Button>
					<Typography
						variant="headline"
						color="inherit"
						align="center"
						noWrap
						className={classes.toolbarTitle}>
						<a href={'/'} className={classes.home}>
							<img src={logo} height="50%" width ="50%" />
						</a>
					</Typography>
					{/* <IconButton> */}
					{/* Commented out search until functionality can be added later if needed  */}
					{/* <SearchIcon /> */}
					{/* </IconButton> */}
					<Button variant="outlined" size="small" href="/signup">
						Sign up
					</Button>
				</Toolbar>
				<Toolbar variant="dense" className={classes.toolbarSecondary}>
					{sections.map(section => (
						<Typography color="inherit" noWrap key={section}>
							{section}
						</Typography>
					))}
				</Toolbar>
			</div>
		</React.Fragment>
	);
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);

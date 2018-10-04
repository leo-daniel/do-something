import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import API from '../utils/API';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginTop: 3,
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		marginBottom: 3,
	},
	button: {
		marginTop: theme.spacing.unit * 2,
		marginLeft: theme.spacing.unit,
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 2,
		marginRight: theme.spacing.unit * 2,
		[theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 3,
		marginBottom: theme.spacing.unit * 3,
		padding: theme.spacing.unit * 2,
		[theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
			marginTop: theme.spacing.unit * 6,
			marginBottom: theme.spacing.unit * 6,
			padding: theme.spacing.unit * 3,
		},
	},
});

class Registered extends Component {
	state = {
		username: '',
		password: '',
		fname: '',
		lname: '',
		address: '',
		city: '',
		state: '',
		phone: '',
		redirectTo: null,
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.username && this.state.password) {
			API.createUser({
				username: this.state.username,
				password: this.state.password,
				firstName: this.state.fname,
				lastName: this.state.lname,
				address: this.state.address,
				city: this.state.city,
				state: this.state.state,
				phoneNumber: this.state.phone,
			})
				.then(res => {
					this.setState({ redirectTo: '/events' });
				})
				.catch(err => console.log(err));
		}
	};

	render() {
		const { classes } = this.props;
		if (this.state.redirectTo) {
			return <Redirect to={this.state.redirectTo} />;
		} else {
			return (
				<main className={classes.layout}>
					<Paper className={classes.paper}>
						<form className={classes.container} noValidate autoComplete="off">
							<Typography variant="display1" gutterBottom>
								User Registration
							</Typography>
							<Grid container justify="center" spacing={16}>
								<Grid item xs={12}>
									<TextField
										id="outlined-email-input"
										label="Email"
										className={classes.textField}
										type="email"
										name="username"
										autoComplete="email"
										margin="normal"
										variant="outlined"
										fullWidth
										required
										value={this.state.username}
										onChange={this.handleInputChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										id="outlined-password-input"
										label="Password"
										className={classes.textField}
										type="password"
										name="password"
										autoComplete="current-password"
										margin="normal"
										variant="outlined"
										fullWidth
										required
										value={this.state.password}
										onChange={this.handleInputChange}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										id="outlined-fname"
										label="First Name"
										className={classes.textField}
										name="fname"
										value={this.state.fname}
										onChange={this.handleInputChange}
										margin="normal"
										variant="outlined"
										fullWidth
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										id="outlined-lname"
										label="Last Name"
										className={classes.textField}
										name="lname"
										value={this.state.lname}
										onChange={this.handleInputChange}
										margin="normal"
										variant="outlined"
										fullWidth
									/>
								</Grid>
								<Grid item xs={12} sm={12}>
									<TextField
										id="outlined-address"
										label="Street Address"
										className={classes.textField}
										name="address"
										value={this.state.address}
										onChange={this.handleInputChange}
										margin="normal"
										variant="outlined"
										fullWidth
									/>
								</Grid>
								<Grid item xs={12} sm={8}>
									<TextField
										id="outlined-city"
										label="City"
										className={classes.textField}
										name="city"
										value={this.state.city}
										onChange={this.handleInputChange}
										margin="normal"
										variant="outlined"
										fullWidth
									/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<TextField
										id="outlined-state"
										label="State"
										className={classes.textField}
										name="state"
										value={this.state.state}
										onChange={this.handleInputChange}
										margin="normal"
										variant="outlined"
										fullWidth
									/>
								</Grid>
								<Grid item xs={12} sm={12}>
									<TextField
										id="outlined-phone"
										label="Phone"
										className={classes.textField}
										name="phone"
										value={this.state.phone}
										onChange={this.handleInputChange}
										margin="normal"
										variant="outlined"
										fullWidth
									/>
								</Grid>
								<Grid item xs={12} sm={12}>
									<Button
										variant="contained"
										color="primary"
										disabled={!(this.state.username && this.state.password)}
										onClick={this.handleFormSubmit}
										className={classes.button}>
										Submit
									</Button>
								</Grid>
							</Grid>
						</form>
					</Paper>
				</main>
			);
		}
	}
}
Registered.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Registered);

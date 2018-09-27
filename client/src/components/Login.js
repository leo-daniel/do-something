// stateful login component

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
  submit: {
    margin: 100,
    padding: 250
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  }
});

class Login extends Component {
  state = {
    username: "",
    password: "",
    redirectTo: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.loginUser({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          this.setState({ redirectTo: "/map" });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { classes } = this.props;
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    } else {
      return (
        <div>
          <Card className={classes.card}>
            <CardContent>
              <form className={classes.container} noValidate autoComplete="off">
                <Typography variant="title" gutterBottom>
                  User Login
          </Typography>
                <Grid container justify="center" spacing={24}>
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
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    disabled={!(this.state.username && this.state.password)}
                    onClick={this.handleFormSubmit}
                  >
                    Sign in
            </Button>
                </Grid>
              </form>
            </CardContent>
          </Card>

        </div>
      );
    }
  }
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
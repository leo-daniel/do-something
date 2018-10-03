// stateful login component
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover"
  },
  submit: {
    margin: 100,
    padding: 250
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  paperAbout: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    },
    backgroundColor: theme.palette.grey[200]
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  aboutBox: {}
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
      return <Redirect to={this.state.redirectTo} />;
    } else {
      return (
        <main className={classes.layout}>
          <Grid container spacing={40} className={classes.mainGrid}>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paperAbout}>
                <Typography variant="display3" gutterBottom>
                  Welcome
                </Typography>
                <Typography variant="display1" gutterBottom>
                  Do Something Better removes obstacles between volunteers and opportunities in need.
                </Typography>
                <Typography variant="title">
                  Login with your email and password or hit the 'Sign Up' button located at the top right
                  of the page to get started.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <form
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="display3" gutterBottom>
                    User Login
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
                    <Grid item xs={12} sm={12}>
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
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </main>
      );
    }
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);

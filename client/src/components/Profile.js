import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginTop: 3,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: 3
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
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
  }
});

class OutlinedTextFields extends React.Component {
  state = {
    // State information was copied in from material-ui example; will need to edit later or remove.
    // email: 'john.doe@gmail.com',
    // age: '',
    // multiline: 'Controlled',
    // currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <form className={classes.container} noValidate autoComplete="off">
            <Typography variant="display1" gutterBottom>
              User Profile
            </Typography>
            <Grid container justify="center" spacing={24}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  defaultValue="john.doe@gmail.com"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-fname"
                  label="First Name"
                  className={classes.textField}
                  value={this.state.fname}
                  onChange={this.handleChange("fname")}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  defaultValue="John"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-lname"
                  label="Last Name"
                  className={classes.textField}
                  value={this.state.lname}
                  onChange={this.handleChange("lname")}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  defaultValue="Doe"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-address"
                  label="Street Address"
                  className={classes.textField}
                  value={this.state.address}
                  onChange={this.handleChange("address")}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  defaultValue="123 Main St"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  id="outlined-city"
                  label="City"
                  className={classes.textField}
                  value={this.state.city}
                  onChange={this.handleChange("city")}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  defaultValue="Raleigh"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="outlined-state"
                  label="State"
                  className={classes.textField}
                  value={this.state.state}
                  onChange={this.handleChange("state")}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  defaultValue="NC"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  id="outlined-phone"
                  label="Phone"
                  className={classes.textField}
                  value={this.state.phone}
                  onChange={this.handleChange("phone")}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  defaultValue="(123) 456-7890"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="outlined-radius"
                  label="Radius"
                  className={classes.textField}
                  value={this.state.radius}
                  onChange={this.handleChange("radius")}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  defaultValue="15"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </main>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);

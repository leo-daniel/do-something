import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  card: {
    minWidth: 275,
    // Removed - was breaking layout when applied.
    // marginBottom: 100,
    // marginTop: 100,
    // marginLeft: 200,
    // marginRight: 200 
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
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
      [name]: event.target.value,
    });
  };
  
  render() {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent>
            <form className={classes.container} noValidate autoComplete="off">
              <Typography variant="title" gutterBottom>
                User Registration
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
                      required
                      />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      className={classes.textField}
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-fname"
                      label="First Name"
                      className={classes.textField}
                      value={this.state.fname}
                      onChange={this.handleChange('fname')}
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
                      value={this.state.lname}
                      onChange={this.handleChange('lname')}
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
                      value={this.state.address}
                      onChange={this.handleChange('address')}
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
                      value={this.state.city}
                      onChange={this.handleChange('city')}
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
                      value={this.state.state}
                      onChange={this.handleChange('state')}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      id="outlined-phone"
                      label="Phone"
                      className={classes.textField}
                      value={this.state.phone}
                      onChange={this.handleChange('phone')}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      id="outlined-radius"
                      label="Radius"
                      className={classes.textField}
                      value={this.state.radius}
                      onChange={this.handleChange('radius')}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                <Grid item xs={12} sm={12}>
                <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >Submit
                </Button>
                </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </React.Fragment>
      );
    }
  }

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);

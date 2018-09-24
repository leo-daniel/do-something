import React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Navbar";
import Container from "../components/Container/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
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

class OutlinedTextFields extends React.Component {
  state = {
    // State information was copied in from material-ui example; will need to edit later or remove.
    // email: 'john.doe@gmail.com',
    // age: '',
    // multiline: 'Controlled',
    // currency: 'EUR',
  }

render() {
  const { classes } = this.props;
  return (
    <div>
      <Nav />
      <Hero />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>
              Let's Do Something!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Welcome to Do Something where we believe the world is a better place when people lend their help and talents to opportunities in need.  Already a member?  Great!  Login and do something great.
            </p>
            <p>
              New to the site?  Great!  Join up to find opportunities to do great things in your community.
            </p>
          </Col>
        </Row>
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
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              >
              Sign in
            </Button>
          </Grid>        
        </form>
              </CardContent>
            </Card>
      </Container>
    </div>
  );
}
};

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
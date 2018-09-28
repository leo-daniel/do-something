import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Hero from "../components/Hero/Hero";
// Commenting out original Navbar component
// import Nav from "../components/Navbar";
import Login from "../components/Login";
import { withStyles } from "@material-ui/core/styles";
import NavbarNew from "../components/NavbarNew";

const styles = theme => ({
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

class Landing extends Component {
  state = {
    loggedIn: null,
    userId: null
  };

  getUser = () => {
    API.getUserStatus()
      .then(res => {
        console.log(res);
        this.setState({
          loggedIn: res.data.loggedIn,
          userId: res.data.userId
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;

    if (this.state.loggedIn) {
      return <Redirect to="/map" />;
    }

    return (
      <div>
        {/* <Nav /> */}
        <NavbarNew />
        <Hero />
        <Login />
      </div>
    );
  }
}

export default withStyles(styles)(Landing);

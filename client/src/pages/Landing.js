import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Navbar";
import Container from "../components/Container/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Login from "../components/Login";

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
  if (this.state.loggedIn) {
    return <Redirect to="/map" />;
  }

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
          <Login />
      </Container>
    </div>
  );
}
};


export default Landing;
import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import fourohfour from "../components/dsb_404.png";

const containerStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%",
  position: "relative",
  minHeight: "100%",
};

const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "100px",
  width: "100%",
};

export default props => (
  <div>
    <Navbar />
    <div style={containerStyle}>
    <img src={fourohfour} style={imageStyle} />
      <p>
        404: We can’t find the page you’re looking for on this server.<br />
        Try heading to the <a href="/">homepage</a>?
      </p>
    </div>
  </div>
);

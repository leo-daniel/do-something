import React from "react";
import "./Hero.css";
import Image from './clark-tibbs-367075-unsplash.jpg';


const Hero = props => (
  <div className="hero text-center" component="img" style={{ backgroundImage: `url(${Image})` }}>
    {props.children}
  </div>
);

export default Hero;

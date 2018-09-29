import React, { Component, Fragment } from 'react';
// Commenting out original Navbar component
// import Navbar from '../components/Navbar';
import NavbarNew from '../components/NavbarNew';
import Signup from '../components/Signup';

export default props =>
    <div>
        {/* <Navbar /> */}
        <NavbarNew />
        <Signup />
    </div>
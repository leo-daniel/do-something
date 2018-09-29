import React, { Component, Fragment } from 'react';
// Commenting out original Navbar component
// import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import NavbarNew from '../components/NavbarNew';

export default props =>
    <div>
        {/* <Navbar /> */}
        <NavbarNew />
        <Profile />
    </div>
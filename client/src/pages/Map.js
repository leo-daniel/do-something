import React, { Component, Fragment } from 'react';
// Commenting out original Navbar component
// import Navbar from '../components/Navbar';
import LeafletMap from '../components/LeafletMap';
import NavbarNew from '../components/NavbarNew';

export default props =>
    <div>
        {/* <Navbar /> */}
        <NavbarNew />
        <LeafletMap />
    </div>
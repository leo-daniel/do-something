import React, { Component, Fragment } from 'react';
import Navbar from '../components/Navbar'

export default props =>
    <div>
        <Navbar />
        <div>
            <h1>Error 404</h1>
            <p>We can’t find the page your’re looking for on this server. Try heading to the <a href='/'>homepage</a>?</p>
        </div>
    </div>
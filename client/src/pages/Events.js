import React, { Component, Fragment } from 'react';
import Navbar from '../components/Navbar'
import Event from '../components/Event'

export default props =>
    <div>
        <Navbar />
        {/* TODO: the Event component needs to be mapped to the events data */}
        <Event />
    </div>
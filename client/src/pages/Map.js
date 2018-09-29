import React from 'react';
import LeafletMap from '../components/LeafletMap';
import Navbar from '../components/Navbar';
import PageFooter from '../components/PageFooter';

export default props =>
    <div>
        {/* <Navbar /> */}
        <Navbar />
        <LeafletMap />
        <PageFooter />
    </div>
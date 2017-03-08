import React, {Component, PropTypes} from 'react';
import CurrentSerial from './CurrentSerial.ctrl';
import { Route, IndexRoute } from 'react-router';

const currentSerialRoute = () => {

    return (
        <Route path="/current-serial(/)" component={CurrentSerial} />
    )
};

export default currentSerialRoute;
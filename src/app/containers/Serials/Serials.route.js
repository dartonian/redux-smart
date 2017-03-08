import React, {Component, PropTypes} from 'react';
import Serials from './Serials.ctrl';
import { Route, IndexRoute } from 'react-router';

const serialsRoute = () => {

    return (
        <Route path="/serials(/)" component={Serials} />
    )
};

export default serialsRoute;
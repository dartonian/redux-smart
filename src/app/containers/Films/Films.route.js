import React, {Component, PropTypes} from 'react';
import Films from './Films.ctrl';
import { Route, IndexRoute } from 'react-router';

const filmsRoute = () => {

    return (
        <Route path="/films(/)" component={Films} />
    )
};

export default filmsRoute;
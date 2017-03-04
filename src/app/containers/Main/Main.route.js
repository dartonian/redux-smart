import React, {Component, PropTypes} from 'react';
import Main from './Main.ctrl';
import { Route, IndexRoute } from 'react-router';

const indexRoute = () => {

    return (
        <IndexRoute component={Main} />
    )
};

export default indexRoute;
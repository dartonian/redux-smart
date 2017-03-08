import React, {Component, PropTypes} from 'react';
import CurrentFilm from './CurrentFilm.ctrl';
import { Route, IndexRoute } from 'react-router';

const currentFilmRoute = () => {

    return (
        <Route path="/current-film(/)" component={CurrentFilm} />
    )
};

export default currentFilmRoute;
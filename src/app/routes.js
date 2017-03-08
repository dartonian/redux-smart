import React from 'react';
import { Route, IndexRoute } from 'react-router';

/*-----------------------------------*/

import App from './containers/App/App';
import indexRoute from './containers/Main/Main.route';
import serialsRoute from './containers/Serials/Serials.route';
import filmsRoute from './containers/Films/Films.route';
import currentSerialRoute from './containers/CurrentSerial/CurrentSerial.route';
import currentFilmRoute from './containers/CurrentFilm/CurrentFilm.route';

/*-----------------------------------*/

export default (
	<Route path="/" component={App}>
		{indexRoute()}
		{serialsRoute()}
		{filmsRoute()}
		{currentSerialRoute()}
		{currentFilmRoute()}
	</Route>
);
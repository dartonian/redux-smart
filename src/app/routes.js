import React from 'react';
import { Route, IndexRoute } from 'react-router';

/*-----------------------------------*/

import App from './containers/App/App';
import indexRoute from './containers/Main/Main.route';
import serialsRoute from './containers/Serials/Serials.route';

/*-----------------------------------*/

export default (
	<Route path="/" component={App}>
		{indexRoute()}
		{serialsRoute()}
	</Route>
);
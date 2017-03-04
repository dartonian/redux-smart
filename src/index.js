import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

/*--------------------------------*/

import configureStore from './configureStore';
import createHistory from './history';

/*--------------------------------*/

import routes from './app/routes';

/*--------------------------------*/

import Html from './index.html';
import Style from './less/styles.less';

/*--------------------------------*/

const store = configureStore();

const history = createHistory(store);

/*--------------------------------*/

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
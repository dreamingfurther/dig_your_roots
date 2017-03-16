import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import configureStore from './configureStore';
import Root from './Root';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

$(function() {
  let reactElement = document.getElementById('react-app');
  if (reactElement) {
    ReactDOM.render(
      <Root store={store} history={history} routes={routes}/>,
      reactElement
    );
  };
});

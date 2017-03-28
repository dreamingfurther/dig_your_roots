import { shallow, mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import $ from 'jquery';
import 'jasmine-ajax';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';
import cookie from 'react-cookie';

import createResponseFromFixture from './support/createResponseFromFixture';
import simulateIfPresent from './support/simulateIfPresent';
import clickOn from './support/clickOn';
import fillIn from './support/fillIn';
import stubGlobalFetch from './support/stubGlobalFetch';
import mountReactAppAt from './support/mountReactAppAt';

let store, page;
$.fn.foundation = () => {};

Object.assign(global, {
  jasmineEnzyme,
  mount,
  React,
  shallow,
  $,
  browserHistory,
  syncHistoryWithStore,
  push,
  createResponseFromFixture,
  simulateIfPresent,
  clickOn,
  fillIn,
  stubGlobalFetch,
  mountReactAppAt,
  store,
  page
});

beforeEach(() => {
  jasmineEnzyme();
});

afterEach(() => {
  if(global.page) { global.page.unmount(); }
  if(global.store) { global.store.dispatch(push('/')); }
  cookie.remove('userData');
});

// function to require all modules for a given context
let requireAll = requireContext => {
  requireContext.keys().forEach(requireContext);
};

// require all js files except testHelper.js in the test folder
requireAll(require.context('./', true, /^((?!testHelper).)*\.jsx?$/));

// require all js files except main.js in the src folder
requireAll(require.context('../src/', true, /^((?!main).)*\.jsx?$/));

// output to the browser's console when the tests run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);

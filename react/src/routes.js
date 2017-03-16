import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from './components/App';
import Layout from './components/Layout';
import NewRsvpContainer from './containers/NewRsvpContainer';
import RsvpThankYouPage from './pages/RsvpThankYouPage';

let routes = (
  <Route path="/" component={ Layout }>
    <IndexRoute component={ App } />
    <Route path="/email_confirmation/:token" component={ NewRsvpContainer } />
    <Route path="/thank_you/:token" component={ RsvpThankYouPage } />
  </Route>
);

export default routes;

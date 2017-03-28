import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import WelcomePage from './pages/WelcomePage';
import LayoutContainer from './containers/LayoutContainer';
import NewRsvpContainer from './containers/NewRsvpContainer';
import RsvpThankYouPage from './pages/RsvpThankYouPage';

let routes = (
  <Route path="/" component={ LayoutContainer }>
    <IndexRoute component={ WelcomePage } />
    <Route path="/email_confirmation/:token" component={ NewRsvpContainer } />
    <Route path="/thank_you/:token" component={ RsvpThankYouPage } />
  </Route>
);

export default routes;

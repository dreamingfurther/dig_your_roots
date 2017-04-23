import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import LayoutContainer from './containers/LayoutContainer';
import WelcomePage from './pages/WelcomePage';
import RsvpFormPage from './pages/RsvpFormPage';
import RsvpThankYouPage from './pages/RsvpThankYouPage';

let routes = (
  <Route path="/" component={ LayoutContainer }>
    <IndexRoute component={ WelcomePage } />
    <Route path="/email_confirmation/:token" component={ RsvpFormPage } />
    <Route path="/thank_you/:token" component={ RsvpThankYouPage } />
  </Route>
);

export default routes;

import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import LayoutContainer from './containers/LayoutContainer';
import WelcomePage from './pages/WelcomePage';
import RsvpFormPage from './pages/RsvpFormPage';
import RsvpThankYouPage from './pages/RsvpThankYouPage';
import EventsIndexPage from './pages/EventsIndexPage';
import EventShowPage from './pages/EventShowPage';

let routes = (
  <Route path="/" component={ LayoutContainer }>
    <IndexRoute component={ WelcomePage } />
    <Route path="/email_confirmation/:token" component={ RsvpFormPage } />
    <Route path="/thank_you/:token" component={ RsvpThankYouPage } />
    <Route path="/events" component={ EventsIndexPage } />
    <Route path="/events/:id" component={ EventShowPage } />
  </Route>
);

export default routes;

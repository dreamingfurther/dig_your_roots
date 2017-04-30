import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import LayoutContainer    from './containers/LayoutContainer';
import WelcomePage        from './pages/WelcomePage';
import EventsIndexPage    from './pages/EventsIndexPage';
import EventShowPage      from './pages/EventShowPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import PasswordResetPage  from './pages/PasswordResetPage';
import RsvpFormPage       from './pages/RsvpFormPage';
import RsvpThankYouPage   from './pages/RsvpThankYouPage';
import VipsPage           from './pages/VipsPage';

let routes = (
  <Route path="/" component={ LayoutContainer }>
    <IndexRoute                              component={ WelcomePage }        />
    <Route path="/email_confirmation/:token" component={ RsvpFormPage }       />
    <Route path="/events"                    component={ EventsIndexPage }    />
    <Route path="/events/:id"                component={ EventShowPage }      />
    <Route path="/forgot_password"           component={ ForgotPasswordPage } />
    <Route path="/password_reset/:token"     component={ PasswordResetPage }  />
    <Route path="/thank_you/:token"          component={ RsvpThankYouPage }   />
    <Route path="/vips"                      component={ VipsPage }           />
  </Route>
);

export default routes;

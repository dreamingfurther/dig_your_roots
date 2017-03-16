import React from 'react';
import { Row, Column } from 'react-foundation';
import { Field, reduxForm } from 'redux-form';
import { push } from 'react-router-redux';

import RsvpAdditionalQuestions from './RsvpAdditionalQuestions';
import { postEmailConfirmation } from '../actions/postEmailConfirmation';

let validate = () => {
  const errors = {};
  return errors;
}

let onSubmit = (fields, dispatch) => {
  dispatch(postEmailConfirmation())
  .then((token) => {
    dispatch(push(`/thank_you/${token}`));
  });
}

const RsvpForm = (props) => {
  return(
    <div className="rsvp-form">
      <h1>Will you join us?</h1>

      <form onSubmit={props.handleSubmit}>
        <label>
          <Field name="rsvp" component="input" type="radio" value="Yes" id="rsvp-yes"/>
          Yes
        </label>
        <label>
          <Field name="rsvp" component="input" type="radio" value="No" id="rsvp-no"/>
          No
        </label>

        <RsvpAdditionalQuestions />
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'emailConfirmation',
  validate,
  onSubmit
})(RsvpForm);

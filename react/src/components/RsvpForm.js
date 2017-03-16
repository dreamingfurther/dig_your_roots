import React from 'react';
import { Row, Column } from 'react-foundation';
import { Field, reduxForm } from 'redux-form';

import RsvpAdditionalQuestions from './RsvpAdditionalQuestions';

let validate = () => {
  const errors = {};
  return errors;
}

let onSubmit = (fields) => {
  console.log("Im submitting whoo:");
  console.log(fields);
}

const RsvpForm = (props) => {
  return(
    <div className="rsvp-form">
      <Row>
        <Column small={12} medium={8} offsetOnMedium={2}>
          <h1>Will you join us?</h1>

          <form onSubmit={props.handleSubmit}>
            <label>
              <Field name="rsvp" component="input" type="radio" value="Yes" />
              Yes
            </label>
            <label>
              <Field name="rsvp" component="input" type="radio" value="No" />
              No
            </label>

            <RsvpAdditionalQuestions />
          </form>
        </Column>
      </Row>
    </div>
  )
}

export default reduxForm({
  form: 'emailConfirmation',
  validate,
  onSubmit
})(RsvpForm);

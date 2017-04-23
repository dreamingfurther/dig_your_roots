import React from 'react';
import { Field } from 'redux-form';

const RsvpYesNoQuestions = () => {
  return(
    <div>
      <h1>Will you join us?</h1>
      <label>
        <Field name="rsvp" component="input" type="radio" value="Yes" id="rsvp-yes"/>
        Yes
      </label>
      <label>
        <Field name="rsvp" component="input" type="radio" value="No" id="rsvp-no"/>
        No
      </label>
    </div>
  )
}

export default RsvpYesNoQuestions;

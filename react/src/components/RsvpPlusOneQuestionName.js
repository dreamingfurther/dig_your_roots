import React from 'react';
import { Field } from 'redux-form';

const RsvpPlusOneQuestionName = () => {
  return(
    <div>
      <label>{ "What's their name?" }</label>
      <Field name="plusOneName" component="input" type="text" placeholder="Optional" id="rsvp-plus-one-name" />
    </div>
  )
}

export default RsvpPlusOneQuestionName;

import React from 'react';
import { Field } from 'redux-form';

const RsvpPlusOneQuestions = () => {
  return(
    <div>
      <label>Would you like to bring a plus one?*</label>
      <div className="note">{ `* Note: All +1's must be 21+` }</div>
      <label>
        <Field name="plusOneAttending" component="input" type="radio" value="Yes" />
        Yes
      </label>
      <label>
        <Field name="plusOneAttending" component="input" type="radio" value="No" />
        No
      </label>
      <label>
        <Field name="plusOneAttending" component="input" type="radio" value="Maybe" />
        { "I'll get back to you" }
      </label>

      <label>{ "What's their name?" }</label>
      <Field name="plusOneName" component="input" type="text" placeholder="Optional" />
    </div>
  )
}

export default RsvpPlusOneQuestions;

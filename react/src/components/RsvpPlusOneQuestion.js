import React from 'react';
import { Field } from 'redux-form';

const RsvpPlusOneQuestion = () => {
  return(
    <div>
      <label>Would you like to bring a plus one?*</label>
      <div className="note">{ `* Note: All +1's must be 21+` }</div>
      <label>
        <Field name="plusOneAttending" component="input" type="radio" value="Yes" id="rsvp-guest-yes"/>
        Yes
      </label>
      <label>
        <Field name="plusOneAttending" component="input" type="radio" value="No" id="rsvp-guest-no"/>
        No
      </label>
      <label>
        <Field name="plusOneAttending" component="input" type="radio" value="Maybe" id="rsvp-guest-maybe"/>
        { "I'll get back to you" }
      </label>
    </div>
  )
}

export default RsvpPlusOneQuestion;

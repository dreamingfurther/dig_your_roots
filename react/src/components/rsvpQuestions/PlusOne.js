import React from 'react';
import { Field } from 'redux-form';
import { Row, Column } from 'react-foundation';

const renderField = ({ input, type, id, label }) => (
  <div className="fancy-checkbox">
    <input {...input} type={type} id={id}/>
    <div className="background"></div>
    <label className="label-text">{ label }</label>
  </div>
)

const RsvpPlusOneQuestion = () => {
  return(
    <div>
      <h1>Would you like to bring a plus one?*</h1>
      <div className="note">{ `* Note: All +1's must be 21+` }</div>
      <Column small={12} medium={4} className="mbl">
        <Field name="plusOneAttending" component={renderField} type="radio" value="Yes" id="rsvp-guest-yes" label="Yes"/>
      </Column>
      <Column small={12} medium={4} className="mbl">
        <Field name="plusOneAttending" component={renderField} type="radio" value="No" id="rsvp-guest-no" label="No"/>
      </Column>
      <Column small={12} medium={4} className="mbl">
        <Field name="plusOneAttending" component={renderField} type="radio" value="Maybe" id="rsvp-guest-maybe" label="I'll get back to you"/>
      </Column>
    </div>
  )
}

export default RsvpPlusOneQuestion;

import React from 'react';
import { Field } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const RsvpPhonePasswordQuestions = () => {
  return(
    <div>
      <label>
        Phone number
      </label>
      <Field name="phone" component="input" id="rsvp-phone" />

      <label>
        Password
      </label>
      <Field
        name="password"
        component={renderField}
        type='password'
        value='Password'
        id="rsvp-password"
        placeholder='password'
      />

      <label>
        Password Confirmation
      </label>
      <Field
        name="passwordConfirmation"
        component={renderField}
        type='password'
        value='passwordConfirmation'
        id="rsvp-rsvp-password-confirmation"
        placeholder='password confirmation'
      />
    </div>
  )
}

export default RsvpPhonePasswordQuestions;

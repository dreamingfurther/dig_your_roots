import React from 'react';
import { Field } from 'redux-form';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      {touched && error && <span className="error-text">{error}</span>}
      <input {...input} placeholder={label} type={type}/>
    </div>
  </div>
)

const RsvpPhonePasswordQuestions = ({ hasPassword }) => {
  let confirmationOrForgotLink;

  if(hasPassword) {
    confirmationOrForgotLink = (
      <Row>
        <Column small={12} medium={3}>
        </Column>
        <Column small={12} medium={9}>
          <Link to='/forgot_password' id='forgot-password-link'>Forget your password?</Link>
        </Column>
      </Row>
    )
  } else {
    confirmationOrForgotLink = (
      <Row>
        <Column small={12} medium={3}>
          Password Confirmation
        </Column>
        <Column small={12} medium={9}>
          <Field
            name="passwordConfirmation"
            component={renderField}
            type='password'
            value='passwordConfirmation'
            id="rsvp-rsvp-password-confirmation"
            placeholder='password confirmation'
          />
        </Column>
      </Row>
    )
  }

  return(
    <div>
      <h1>
        Account Details
      </h1>
      <Row>
        <Column small={12} medium={3}>
          Phone
        </Column>
        <Column small={12} medium={9}>
          <Field name="phone" component="input" id="rsvp-phone" />
        </Column>
      </Row>
      <Row>
        <Column small={12} medium={3}>
          Password
        </Column>
        <Column small={12} medium={9}>
          <Field
            name="password"
            component={renderField}
            type='password'
            value='Password'
            id="rsvp-password"
            placeholder='password'
          />
        </Column>
      </Row>
      { confirmationOrForgotLink }
    </div>
  )
}

export default RsvpPhonePasswordQuestions;

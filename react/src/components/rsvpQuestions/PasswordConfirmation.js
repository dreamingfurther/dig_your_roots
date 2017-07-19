import React from 'react';
import { Field } from 'redux-form';
import { Row, Column } from 'react-foundation';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      {touched && error && <span className="error-text">{error}</span>}
      <input {...input} placeholder={label} type={type}/>
    </div>
  </div>
)

const PasswordConfirmation = () => {
  return(
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

export default PasswordConfirmation;

import React from 'react'
import { Row, Column } from 'react-foundation';
import { Field } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      {touched && error && <span className="error-text">{error}</span>}
      <input {...input} placeholder={label} type={type}/>
    </div>
  </div>
)

const Password = () => {
  return(
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
  )
}

export default Password;

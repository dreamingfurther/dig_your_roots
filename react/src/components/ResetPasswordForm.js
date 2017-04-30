import React  from 'react';
import { Field, SubmissionError, reduxForm, reset } from 'redux-form';
import { push } from 'react-router-redux';
import { Row, Column } from 'react-foundation';
import { postNewPassword } from '../actions/postNewPassword';

let onSubmit = (fields, dispatch) => {
  return dispatch(postNewPassword(fields))
    .then(() => {
      dispatch(push('/'));
    })
    .catch(error => {
      throw new SubmissionError({'_error': error});
    });
}

let validate = (fields) => {
  const errors = {};
  if(!fields.password) {
    errors.password = "Password Required"
  }
  if(!fields.passwordConfirmation) {
    errors.passwordConfirmation = "Password Confirmation Required"
  }
  if(fields.password != fields.passwordConfirmation) {
    errors.passwordConfirmation = "Password must match Password Confirmation"
  }
  return errors;
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      {touched && error && <span className="error-text">{error}</span>}
      <input {...input} placeholder={label} type={type}/>
    </div>
  </div>
)

const ResetPasswordForm = (props) => {
  return(
    <Row>
      <Column small={10} offsetOnSmall={1} medium={6} offsetOnMedium={3}>
        <form onSubmit={ props.handleSubmit }>
          <Field
            name="password"
            component={renderField}
            type='password'
            value='Password'
            id="rsvp-password"
            placeholder='password'
          />
          <Field
            name="passwordConfirmation"
            component={renderField}
            type='password'
            value='passwordConfirmation'
            id="rsvp-rsvp-password-confirmation"
            placeholder='password confirmation'
          />
          <button
            type='submit'
            className='sign-in-button'
            id='sign-in-button'>
            Reset Password
          </button>
          <div>
            { props.error && <span style={{ color: 'red' }}>{ props.error }</span> }
          </div>
        </form>
      </Column>
    </Row>
  )
}

export default reduxForm({
  form: 'resetPasswordForm',
  validate,
  onSubmit
})(ResetPasswordForm);

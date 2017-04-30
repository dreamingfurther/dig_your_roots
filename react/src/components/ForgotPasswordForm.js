import React  from 'react';
import { Field, SubmissionError, reduxForm, reset } from 'redux-form';
import { Row, Column } from 'react-foundation';
import { postPasswordReset } from '../actions/postPasswordReset';

let onSubmit = (fields, dispatch) => {
  return dispatch(postPasswordReset(fields.email))
    .then(() => {
      dispatch(reset('forgotPasswordForm'));
    })
    .catch(error => {
      throw new SubmissionError({'_error': error});
    });
}

const ForgotPasswordForm = (props) => {
  return(
    <Row>
      <Column small={10} offsetOnSmall={1} medium={6} offsetOnMedium={3}>
        <form onSubmit={ props.handleSubmit(onSubmit) }>
          <Field
            name='email'
            component='input'
            type='text'
            value='Email'
            id='forgot-password-email'
            placeholder='Email'
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
  form: 'forgotPasswordForm'
})(ForgotPasswordForm);

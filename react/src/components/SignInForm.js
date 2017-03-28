import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';

import { postAuthorize } from '../actions/postAuthorize';

let onSubmit = (fields, dispatch) => {
  return dispatch(postAuthorize())
    .then(authData => {
      console.log('successfull auth!');
    })
    .catch(error => {
      throw new SubmissionError({'_error': error});
    });
}

const SignInForm = (props) => {
  return(
    <div>
      <form onSubmit={ props.handleSubmit(onSubmit) }>
        <label>
          Email
          <Field name='email' component='input' type='text' value='Email' id='sign-in-email' />
        </label>
        <label>
          Password
          <Field name='password' component='input' type='password' value='Password' id='sign-in-password' />
        </label>
        <button
          type='submit'
          disabled={props.pristine || props.submitting}
          className='sign-in-button'
          id='sign-in-button'>
          Sign In
        </button>
        <div>
          { props.error && <span style={{ color: 'red' }}>{ props.error }</span> }
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'signInForm'
})(SignInForm);

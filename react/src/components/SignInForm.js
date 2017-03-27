import React  from 'react';
import { Field, reduxForm } from 'redux-form';

import { postAuthorize } from '../actions/postAuthorize';

let onSubmit = (fields, dispatch) => {
  dispatch(postAuthorize());
}

const SignInForm = (props) => {
  return(
    <div>
      <form onSubmit={ props.handleSubmit }>
        <label>
          Email
          <Field name='email' component='input' type='text' value='Email' id='sign-in-email' />
        </label>
        <label>
          Password
          <Field name='password' component='input' type='text' value='Password' id='sign-in-password' />
        </label>
        <button type='submit' className='sign-in-button' id='sign-in-button'>
          Sign In
        </button>
        <div>
          { props.errors }
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'signInForm',
  onSubmit
})(SignInForm);

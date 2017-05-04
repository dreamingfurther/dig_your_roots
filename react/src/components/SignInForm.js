import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Column } from 'react-foundation';
import { SubmissionError } from 'redux-form';
import { Link } from 'react-router';
import { postAuthorize } from '../actions/postAuthorize';

let onSubmit = (fields, dispatch) => {
  return dispatch(postAuthorize())
    .then(data => {
      window.scrollTo(0, 0);
    })
    .catch(error => {
      throw new SubmissionError({'_error': error});
    });
}

const SignInForm = (props) => {
  return(
    <Row>
      <Column small={10} offsetOnSmall={1} medium={6} offsetOnMedium={3}>
        <form onSubmit={ props.handleSubmit(onSubmit) }>
            <Field
              name='email'
              component='input'
              type='text'
              value='email'
              id='sign-in-email'
              placeholder='enter your email'
            />
          <Field
            name='password'
            component='input'
            type='password'
            value='Password'
            id='sign-in-password'
            placeholder='password'
          />
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
          <div>
            <Link to='/forgot_password' id='forgot-password-link'>Forget your password?</Link>
          </div>
        </form>
      </Column>
    </Row>
  )
}

export default reduxForm({
  form: 'signInForm'
})(SignInForm);

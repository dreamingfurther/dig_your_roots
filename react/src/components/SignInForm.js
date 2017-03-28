import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Column } from 'react-foundation';

import { postAuthorize } from '../actions/postAuthorize';

let onSubmit = (fields, dispatch) => {
  dispatch(postAuthorize());
}

const SignInForm = (props) => {
  return(
    <Row>
      <Column small={10} offsetOnSmall={1} medium={6} offsetOnMedium={3}>
        <form onSubmit={ props.handleSubmit }>
            <Field
              name='email'
              component='input'
              type='text'
              value='Email'
              id='sign-in-email'
              placeholder='Email'
            />
          <Field
            name='password'
            component='input'
            type='text'
            value='Password'
            id='sign-in-password'
            placeholder='password'
          />
          <button type='submit' className='sign-in-button' id='sign-in-button'>
            Sign In
          </button>
          <div>
            { props.errors }
          </div>
        </form>
      </Column>
    </Row>
  )
}

export default reduxForm({
  form: 'signInForm',
  onSubmit
})(SignInForm);

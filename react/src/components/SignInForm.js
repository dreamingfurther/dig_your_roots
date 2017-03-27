import React  from 'react';
import { Field, reduxForm } from 'redux-form';

let validate = () => {
  const errors = {};
  return errors;
}

let onSubmit = (fields, dispatch) => {
  console.log("SIGNEDINPROBABALY");
}

const SignInForm = (props) => {
  return(
    <div>
      email
    </div>
  )
}

export default reduxForm({
  form: 'signInForm',
  validate,
  onSubmit
})(SignInForm);

import React from 'react';
import { connect } from 'react-redux';
import SignInForm from '../components/SignInForm';
import SignInToggleButton from '../components/SignInToggleButton';
import { toggleSignInForm } from '../actions/toggleSignInForm';

const SignInFormContainer = (props) => {
  let signInToggle, signInForm;

  if(!props.userLoggedIn) {
    signInToggle = <SignInToggleButton toggleSignInForm={props.toggleSignInForm} showSignInForm={props.showSignInForm}/>;
  }
  if(props.showSignInForm && !props.userLoggedIn) {
    signInForm = <SignInForm />;
  }

  return(
    <div className="sign-in-form-container">
      { signInToggle }
      { signInForm }
    </div>
  )
}

let mapStateToProps = (store) => {
  return {
    showSignInForm: store.showSignInForm.visible,
    userLoggedIn: store.userLoggedIn
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    toggleSignInForm: () => { dispatch(toggleSignInForm()) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SignInFormContainer);

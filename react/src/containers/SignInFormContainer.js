import React from 'react';
import { connect } from 'react-redux';
import SignInForm from '../components/SignInForm';
import SignInToggleButton from '../components/SignInToggleButton';
import { toggleSignInForm } from '../actions/toggleSignInForm';

const SignInFormContainer = (props) => {
  let underImageText, signInForm;

  if(!props.userLoggedIn) {
    underImageText = <SignInToggleButton toggleSignInForm={props.toggleSignInForm} showSignInForm={props.showSignInForm}/>;
  } else {
    underImageText = (
      <div>
        <h4 className="script-font">Welcome to our Wedding Site!</h4>
        <p>Use the navigation bar above to learn more about upcoming events, VIPS, and more!</p>
      </div>
    )
  }
  if(props.showSignInForm && !props.userLoggedIn) {
    signInForm = <SignInForm />;
  }

  return(
    <div className="sign-in-form-container">
      { underImageText }
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

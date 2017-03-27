import React from 'react';
import { connect } from 'react-redux';

import SignInForm from '../components/SignInForm';
import SignInToggleButton from '../components/SignInToggleButton';
import { toggleSignInForm } from '../actions/toggleSignInForm';

const SignInFormContainer = (props) => {
  let signInForm;

  if(props.showSignInForm) {
    signInForm = <SignInForm errors={ '' }/>;
  }

  return(
    <div>
      <SignInToggleButton toggleSignInForm={props.toggleSignInForm} />
      { signInForm }
    </div>
  )
}

let mapStateToProps = (store) => {
  return {
    showSignInForm: store.showSignInForm.visible
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

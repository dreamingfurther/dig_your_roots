import React from 'react';

const SignInToggleButton = (props) => {
  let toggleText;
  if(props.showSignInForm) {
    toggleText = "Fill in your information"
  } else {
    toggleText = "Sign In"
  }
  return(
    <div id="toggle-sign-in-form" onClick={ props.toggleSignInForm }>
      { toggleText }
    </div>
  )
}

export default SignInToggleButton;

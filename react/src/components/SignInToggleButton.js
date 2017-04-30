import React from 'react';

const SignInToggleButton = (props) => {
  let toggleText;
  if(props.showSignInForm) {
    toggleText = <a>Fill in your information</a>
  } else {
    toggleText = <a>Sign In</a>
  }
  return(
    <div id="toggle-sign-in-form" onClick={ props.toggleSignInForm }>
      { toggleText }
    </div>
  )
}

export default SignInToggleButton;

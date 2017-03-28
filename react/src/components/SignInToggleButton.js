import React from 'react';

const SignInToggleButton = (props) => {
  return(
    <div id="toggle-sign-in-form" onClick={ props.toggleSignInForm }>
      Sign In
    </div>
  )
}

export default SignInToggleButton;

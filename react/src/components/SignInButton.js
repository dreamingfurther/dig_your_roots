import React from 'react';

const SignInButton = (props) => {
  return(
    <div id="sign-in-form" onClick={ props.toggleSignInForm }>
      Sign In
    </div>
  )
}

export default SignInButton;

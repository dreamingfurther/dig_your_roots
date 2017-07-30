import React, { Component }  from 'react';
import SignInFormContainer from './../containers/SignInFormContainer';
import { railsAssetImagePath } from './../constants/railsAssetImagePath';

const WelcomePage = () => {
  return(
    <div className='welcome-page-wrapper'>
      <div className='welcome-message'>
        Find.
        <br />
        Your.
        <br />
        Self.
      </div>
      <SignInFormContainer />
    </div>
  )
}

export default WelcomePage;

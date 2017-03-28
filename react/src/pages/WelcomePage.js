import React, { Component }  from 'react';
import SignInFormContainer from './../containers/SignInFormContainer';
import { railsAssetImagePath } from './../constants/railsAssetImagePath';

const WelcomePage = () => {
  return(
    <div className='welcome-page-wrapper'>
      <img src={railsAssetImagePath("kissy-face.jpg")} className="circular-square"></img>
      <SignInFormContainer />
    </div>
  )
}

export default WelcomePage;

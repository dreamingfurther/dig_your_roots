import React, { Component }  from 'react';
import SignInFormContainer from './../containers/SignInFormContainer';
import { railsAssetImagePath } from './../constants/railsAssetImagePath';

const WelcomePage = () => {
  return(
    <div className='welcome-page-wrapper'>
      <h4 className="script-font man">Welcome to our Wedding Site!</h4>
      <img src={railsAssetImagePath("kissy-face.jpg")} className="circular-square"></img>
      <SignInFormContainer />
    </div>
  )
}

export default WelcomePage;

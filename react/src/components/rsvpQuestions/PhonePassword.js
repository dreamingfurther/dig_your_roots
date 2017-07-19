import React from 'react';

import Phone from './Phone';
import Password from './Password';
import ForgotPasswordLink from './ForgotPasswordLink';
import PasswordConfirmation from './PasswordConfirmation';

const RsvpPhonePasswordQuestions = ({ hasPassword }) => {
  return(
    <div>
      <h1> Account Details </h1>
      <Phone />
      <Password />
      { hasPassword ? <ForgotPasswordLink /> : <PasswordConfirmation /> }
    </div>
  )
}

export default RsvpPhonePasswordQuestions;

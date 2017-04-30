import React from 'react'
import ResetPasswordForm from '../components/ResetPasswordForm';

const PasswordResetPage = (props) => {
  return(
    <div>
      <p>
        Please enter a new password and password confirmation
      </p>
      <ResetPasswordForm />
    </div>
  )
}

export default PasswordResetPage;

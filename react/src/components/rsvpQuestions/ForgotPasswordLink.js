import React from 'react'
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router';

const ForgotPasswordLink = () => {
  return(
    <Row>
      <Column small={12} medium={3}>
      </Column>
      <Column small={12} medium={9}>
        <Link to='/forgot_password' id='forgot-password-link'>Forget your password?</Link>
      </Column>
    </Row>
  )
}

export default ForgotPasswordLink;

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import { toggleForgotPasswordForm } from '../actions/toggleForgotPasswordForm';

class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.toggleForgotPasswordForm(true);
  }

  render() {
    let forgotPasswordForm = null;

    if(this.props.showForgotPasswordForm) {
      forgotPasswordForm = (
        <div>
          <p>
            Enter your email to send a reset link
          </p>
          <ForgotPasswordForm />
        </div>
      )
    } else {
      forgotPasswordForm = (
        <div>
          Please check your email for a password reset message shortly!
        </div>
      )
    }

    return(
      <div>
        { forgotPasswordForm }
      </div>
    )
  }
}

let mapStateToProps = (store) => {
  return {
    showForgotPasswordForm: store.showForgotPasswordForm
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    toggleForgotPasswordForm: (visible) => { dispatch(toggleForgotPasswordForm(visible)) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ForgotPasswordPage);

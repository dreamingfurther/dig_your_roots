import {
  TOGGLE_FORGOT_PASSWORD_FORM
} from '../actions/toggleForgotPasswordForm'

let initialState = true

let showForgotPasswordForm = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FORGOT_PASSWORD_FORM:
      return action.visible
    default:
      return state;
  }
}

export default showForgotPasswordForm;

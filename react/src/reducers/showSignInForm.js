import {
  TOGGLE_SIGN_IN_FORM
} from '../actions/toggleSignInForm'

let initialState = {
  visible: false
}

let showSignInForm = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_SIGN_IN_FORM:
      return { visible: !state.visible }
    default:
      return state;
  }
}

export default showSignInForm;

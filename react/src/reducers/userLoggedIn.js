import {
  POST_AUTHORIZE_SUCCESS, POST_AUTHORIZE_FAILURE
} from '../actions/postAuthorize';

let initialState = false

let userLoggedIn = (state = initialState, action) => {
  switch(action.type) {
    case POST_AUTHORIZE_SUCCESS:
      return true;
    case POST_AUTHORIZE_FAILURE:
      return false
    default:
      return state;
  }
}

export default userLoggedIn;

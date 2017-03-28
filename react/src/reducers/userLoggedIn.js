import {
  POST_AUTHORIZE_SUCCESS
} from '../actions/postAuthorize';

let initialState = false

let userLoggedIn = (state = initialState, action) => {
  switch(action.type) {
    case POST_AUTHORIZE_SUCCESS:
      return true;
    default:
      return state;
  }
}

export default userLoggedIn;

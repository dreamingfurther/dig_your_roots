import {
  POST_AUTHORIZE_SUCCESS, POST_AUTHORIZE_FAILURE
} from '../actions/postAuthorize';

let initialState = {
  first_name: null,
  last_name: null,
  email: null,
  phone: null,
  admin: false
}

let user = (state = initialState, action) => {
  switch(action.type) {
    case POST_AUTHORIZE_SUCCESS:
      return action.userData;
    case POST_AUTHORIZE_FAILURE:
      return initialState;
    default:
      return state;
  }
}

export default user;

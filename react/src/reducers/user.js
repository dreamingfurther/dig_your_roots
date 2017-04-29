import {
  POST_AUTHORIZE_SUCCESS, POST_AUTHORIZE_FAILURE
} from '../actions/postAuthorize';
import {
  GET_USER_EVENTS_REQUEST_SUCCESS, GET_USER_EVENTS_REQUEST_FAILURE
} from '../actions/getUserEvents';

let initialState = {
  first_name: null,
  last_name: null,
  email: null,
  phone: null,
  id: null,
  admin: false,
  events: []
}

let user = (state = initialState, action) => {
  switch(action.type) {
    case POST_AUTHORIZE_SUCCESS:
      return Object.assign({}, state, action.userData)
    case POST_AUTHORIZE_FAILURE:
      return initialState;
    case GET_USER_EVENTS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        events: action.data
      })
    case GET_USER_EVENTS_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}

export default user;

import {
  GET_EMAIL_CONFIRMATION_REQUEST,
  GET_EMAIL_CONFIRMATION_REQUEST_SUCCESS,
  GET_EMAIL_CONFIRMATION_REQUEST_FAILURE
} from '../actions/getEmailConfirmation';
import {
  POST_EMAIL_CONFIRMATION,
  POST_EMAIL_CONFIRMATION_SUCCESS,
  POST_EMAIL_CONFIRMATION_FAILURE
} from '../actions/postEmailConfirmation';

let initialState = {
  isFetching: false,
  guest: {
    plusOneInvited: false
  },
  event: {}
}

let emailConfirmation = (state = initialState, action) => {
  switch(action.type) {
    case GET_EMAIL_CONFIRMATION_REQUEST || POST_EMAIL_CONFIRMATION:
      return Object.assign({}, state, {
        isFetching: true
      })
    case GET_EMAIL_CONFIRMATION_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        guest: action.data.guest,
        event: action.data.event
      })
    case GET_EMAIL_CONFIRMATION_REQUEST_FAILURE || POST_EMAIL_CONFIRMATION_SUCCESS || POST_EMAIL_CONFIRMATION_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state;
  }
}

export default emailConfirmation;

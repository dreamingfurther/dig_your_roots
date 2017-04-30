import Cookies from 'js-cookie';
import { postAuthorizeRequestSuccess } from './postAuthorize';

const POST_NEW_PASSWORD_REQUEST = 'POST_NEW_PASSWORD_REQUEST';
const POST_NEW_PASSWORD_REQUEST_FAILURE = 'POST_NEW_PASSWORD_REQUEST_FAILURE';
const POST_NEW_PASSWORD_REQUEST_SUCCESS = 'POST_NEW_PASSWORD_REQUEST_SUCCESS';

let postNewPasswordRequest = () => {
  return {
    type: POST_NEW_PASSWORD_REQUEST
  };
}

let postNewPasswordRequestFailure = () => {
  return {
    type: POST_NEW_PASSWORD_REQUEST_FAILURE
  };
}

let postNewPasswordRequestSuccess = () => {
  return {
    type: POST_NEW_PASSWORD_REQUEST_SUCCESS
  };
}

let postNewPassword = (fields) => {
  return (dispatch, store) => {
    dispatch(postNewPasswordRequest());

    let resetToken = store().routing.locationBeforeTransitions.pathname.split('/')[2]
    let payload = JSON.stringify(fields)
    return fetch(`/api/v1/password_reset/${resetToken}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    })
    .then(response => {
      let { ok, status, statusText } = response;
      if (ok || status === 422) {
        return response.json();
      } else {
        dispatch(postNewPasswordRequestFailure());
        return { error: `postNewPassword: ${status} (${statusText})`};
      }
    })
    .then(data => {
      if(data.error) {
        throw data.error
      } else {
        dispatch(postNewPasswordRequestSuccess());
        dispatch(postAuthorizeRequestSuccess(data));
        Cookies.set('userData', data);
        return data;
      }
    })
  }
}

export { postNewPassword };

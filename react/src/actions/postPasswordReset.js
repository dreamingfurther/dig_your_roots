import { toggleForgotPasswordForm } from './toggleForgotPasswordForm';

const POST_PASSWORD_RESET_REQUEST = 'POST_PASSWORD_RESET_REQUEST';
const POST_PASSWORD_RESET_REQUEST_SUCCESS = 'POST_PASSWORD_RESET_REQUEST_SUCCESS';
const POST_PASSWORD_RESET_REQUEST_FAILURE = 'POST_PASSWORD_RESET_REQUEST_FAILURE';

let postPasswordResetRequest = () => {
  return {
    type: POST_PASSWORD_RESET_REQUEST
  };
}

let postPasswordResetRequestSuccess = () => {
  return {
    type: POST_PASSWORD_RESET_REQUEST_SUCCESS
  };
}

let postPasswordResetRequestFailure = () => {
  return {
    type: POST_PASSWORD_RESET_REQUEST_FAILURE
  };
}

let postPasswordReset = (email) => {
  return (dispatch) => {
    dispatch(postPasswordResetRequest());
    let payload = JSON.stringify({ email: email });

    return fetch('/api/v1/password_reset', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    })
    .then(response => {
      let { ok, status, statusText } = response;
      if (ok || status === 422) {
        return response.json();
      } else {
        dispatch(postPasswordResetRequestFailure());
        return { error: `postPasswordReset: ${status} (${statusText})`};
      }
    })
    .then(data => {
      if(data.error) {
        throw data.error
      } else {
        dispatch(postPasswordResetRequestSuccess());
        dispatch(toggleForgotPasswordForm(false));
        return data;
      }
    })
  }
}

export { postPasswordReset };

import Cookies from 'js-cookie';
import { push } from 'react-router-redux';
import {
  postAuthorizeRequestSuccess, postAuthorizeRequestFailure
} from './postAuthorize';

let postAuthorizeReturningUser = () => {
  return (dispatch, store) => {
    let payload = JSON.stringify({
      user: {
        email: store().emailConfirmation.guest.email,
        password: store().form.emailConfirmation.values.password
      }
    });

    return fetch('/api/v1/authorize', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    })
    .then(response => {
      let { ok, status, statusText } = response;
      if (ok || status === 401) {
        return response.json();
      } else {
        return { error: `postAuth: ${status} (${statusText})`};
      }
    })
    .then(data => {
      if (data.error) {
        dispatch(postAuthorizeRequestFailure());
        throw data.error;
      } else {
        dispatch(postAuthorizeRequestSuccess(data));
        Cookies.set('userData', data);
        return data;
      }
    });
  }
}

export { postAuthorizeReturningUser };

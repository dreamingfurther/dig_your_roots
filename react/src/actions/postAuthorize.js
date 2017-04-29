import Cookies from 'js-cookie';

const POST_AUTHORIZE = "POST_AUTHORIZE"
const POST_AUTHORIZE_SUCCESS = "POST_AUTHORIZE_SUCCESS"
const POST_AUTHORIZE_FAILURE = "POST_AUTHORIZE_FAILURE"

let postAuthorizeRequestSuccess = (userData) => {
  return {
    type: POST_AUTHORIZE_SUCCESS, userData
  };
}

let postAuthorizeRequestFailure = () => {
  return {
    type: POST_AUTHORIZE_FAILURE
  };
}

let postAuthorize = () => {
  return (dispatch, store) => {
    let userData = store().form.signInForm.values;
    let payload = JSON.stringify({ user: userData });

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
        window.scrollTo(0, 0);
        return data;
      }
    });
  }
}

export {
  POST_AUTHORIZE, POST_AUTHORIZE_SUCCESS, POST_AUTHORIZE_FAILURE
};

export {
  postAuthorize, postAuthorizeRequestSuccess, postAuthorizeRequestFailure
};

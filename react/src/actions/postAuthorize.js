const POST_AUTHORIZE = "POST_AUTHORIZE"
const POST_AUTHORIZE_SUCCESS = "POST_AUTHORIZE_SUCCESS"
const POST_AUTHORIZE_FAILURE = "POST_AUTHORIZE_FAILURE"

let postAuthorize = () => (dispatch, store) => {
  let userData = store().form.signInForm.values;
  let payload = JSON.stringify({ user: userData });

  return fetch('/api/v1/authorize', {
    credentials: 'same-origin',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload
  })
}

export {
  POST_AUTHORIZE, POST_AUTHORIZE_SUCCESS, POST_AUTHORIZE_FAILURE
};

export {
  postAuthorize
};

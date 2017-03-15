import humps from 'humps';

export const GET_EMAIL_CONFIRMATION_REQUEST = 'GET_EMAIL_CONFIRMATION_REQUEST';
export const GET_EMAIL_CONFIRMATION_REQUEST_SUCCESS = 'GET_EMAIL_CONFIRMATION_REQUEST_SUCCESS';
export const GET_EMAIL_CONFIRMATION_REQUEST_FAILURE = 'GET_EMAIL_CONFIRMATION_REQUEST_FAILURE';

const getEmailConfirmationRequest = () => ({
  type: GET_EMAIL_CONFIRMATION_REQUEST
});

const getEmailConfirmationRequestSuccess = (data) => ({
  type: GET_EMAIL_CONFIRMATION_REQUEST_SUCCESS,
  data
});

const getEmailConfirmationRequestFailure = () => ({
  type: GET_EMAIL_CONFIRMATION_REQUEST_FAILURE
});

let getEmailConfirmation = token => (dispatch) => {
  dispatch(getEmailConfirmationRequest());

  fetch(`/api/v1/email_confirmation/${token}`, {
    credentials: 'same-origin',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    let { ok, status, statusText } = response;
    if (ok) {
      return response.json();
    } else {
      let error = new Error(`getEmailConfirmation: ${status} (${statusText})`);
      dispatch(getEmailConfirmationRequestFailure());
      throw(error);
    }
  })
  .then(data => {
    let camelizedData = humps.camelizeKeys(data);
    dispatch(getEmailConfirmationRequestSuccess(camelizedData));
  });
}

export { getEmailConfirmation };

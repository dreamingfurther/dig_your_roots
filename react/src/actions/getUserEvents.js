import humps from 'humps';

export const GET_USER_EVENTS_REQUEST = 'GET_USER_EVENTS_REQUEST';
export const GET_USER_EVENTS_REQUEST_SUCCESS = 'GET_USER_EVENTS_REQUEST_SUCCESS';
export const GET_USER_EVENTS_REQUEST_FAILURE = 'GET_USER_EVENTS_REQUEST_FAILURE';

const getUserEventsRequest = () => ({
  type: GET_USER_EVENTS_REQUEST
});

const getUserEventsRequestSuccess = (data) => ({
  type: GET_USER_EVENTS_REQUEST_SUCCESS,
  data
});

const getUserEventsRequestFailure = () => ({
  type: GET_USER_EVENTS_REQUEST_FAILURE
});

let getUserEvents = userId => (dispatch) => {
  dispatch(getUserEventsRequest());

  fetch(`/api/v1/users/${userId}/events`, {
    credentials: 'same-origin',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    let { ok, status, statusText } = response;
    if (ok) {
      return response.json();
    } else {
      let error = new Error(`getUserEvents: ${status} (${statusText})`);
      dispatch(getUserEventsRequestFailure());
      throw(error);
    }
  })
  .then(data => {
    let camelizedData = humps.camelizeKeys(data);
    dispatch(getUserEventsRequestSuccess(camelizedData));
  });
}

export { getUserEvents };

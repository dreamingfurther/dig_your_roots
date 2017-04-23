import Cookies from 'js-cookie';
import { SubmissionError } from 'redux-form';
import { postAuthorizeRequestSuccess } from './postAuthorize';

const POST_EMAIL_CONFIRMATION = "POST_EMAIL_CONFIRMATION";
const POST_EMAIL_CONFIRMATION_SUCCESS = "POST_EMAIL_CONFIRMATION_SUCCESS";
const POST_EMAIL_CONFIRMATION_FAILURE = "POST_EMAIL_CONFIRMATION_FAILURE";

let postEmailConfirmationRequest = () => {
  return {
    type: POST_EMAIL_CONFIRMATION
  };
};

let postEmailConfirmationRequestSuccess = () => {
  return {
    type: POST_EMAIL_CONFIRMATION_SUCCESS
  };
}

let postEmailConfirmationRequestFailure = () => {
  return {
    type: POST_EMAIL_CONFIRMATION_FAILURE
  };
}

let postEmailConfirmation = () => {
  return (dispatch, getState) => {
    let fields = getState().form.emailConfirmation.values
    let token = getState().emailConfirmation.guest.token
    dispatch(postEmailConfirmationRequest());

    let payload = JSON.stringify(
      {
        id: token,
        answer: {
          rsvp: fields.rsvp,
          plus_one_attending: fields.plusOneAttending,
          plus_one_fullname: fields.plusOneName,
          plus_one_food_option: fields.foodChoicePlusOne,
          notes: fields.notes,
          questions: fields.questions,
          food_option: fields.foodChoice,
          phone: fields.phone,
          password: fields.password,
          password_confirmation: fields.passwordConfirmation,
        }
      }
    )

    return fetch(`/api/v1/email_confirmation/${token}`, {
      credentials: 'same-origin',
      method: 'PATCH',
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
      dispatch(postEmailConfirmationRequestSuccess());
      dispatch(postAuthorizeRequestSuccess(data));
      Cookies.set('userData', data);
      return token;
    })
    .catch(error => {
      dispatch(postEmailConfirmationRequestFailure())
      throw new SubmissionError({'_error': error});
    })
  }
};

export {
  POST_EMAIL_CONFIRMATION,
  POST_EMAIL_CONFIRMATION_SUCCESS,
  POST_EMAIL_CONFIRMATION_FAILURE
};

export {
  postEmailConfirmation,
  postEmailConfirmationRequest,
  postEmailConfirmationRequestSuccess,
  postEmailConfirmationRequestFailure
};

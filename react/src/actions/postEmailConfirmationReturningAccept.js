import {
  postEmailConfirmationRequest,
  postEmailConfirmationRequestSuccess,
  postEmailConfirmationRequestFailure
} from './postEmailConfirmation';
import { postAuthorizeRequestSuccess } from './postAuthorize';

let postEmailConfirmationReturningAccept = (token) => {
  return (dispatch, getState) => {
    dispatch(postEmailConfirmationRequest());

    let fields = getState().form.emailConfirmation.values
    let token = getState().emailConfirmation.guest.token
    let rsvpBoolean = fields.rsvp == "Yes" ? true : null
    let payload = JSON.stringify(
      {
        id: token,
        answer: {
          rsvp: rsvpBoolean,
          plus_one_attending: fields.plusOneAttending,
          plus_one_fullname: fields.plusOneName,
          plus_one_food_choice: fields.foodChoicePlusOne,
          notes: fields.notes,
          questions: fields.questions,
          food_choice: fields.foodChoice,
          dance_question: fields.danceQuestion,
          phone: fields.phone
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
        return { error: `postEmailConfirmation: ${status} (${statusText})`};
      }
    })
    .then(data => {
      dispatch(postEmailConfirmationRequestSuccess());
      dispatch(postAuthorizeRequestSuccess(data));
      return token;
    })
    .catch(error => {
      dispatch(postEmailConfirmationRequestFailure())
      throw error;
    })
  }
}

export {
  postEmailConfirmationReturningAccept
};

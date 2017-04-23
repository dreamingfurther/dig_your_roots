import React from 'react';
import { Row, Column } from 'react-foundation';
import { reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import { postEmailConfirmation } from '../actions/postEmailConfirmation';
import RsvpYesNoQuestions from '../components/RsvpYesNoQuestions';
import RsvpAdditionalQuestionsContainer from '../containers/RsvpAdditionalQuestionsContainer';
import RsvpWelcomeContainer from '../containers/RsvpWelcomeContainer';
import RsvpEventDetailsContainer from '../containers/RsvpEventDetailsContainer';

let validate = (fields) => {
  const errors = {};
  if(!fields.password) {
    errors.password = "Password Required"
  }
  if(!fields.passwordConfirmation) {
    errors.passwordConfirmation = "Password Confirmation Required"
  }
  if(fields.password != fields.passwordConfirmation) {
    errors.passwordConfirmation = "Password must match Password Confirmation"
  }
  return errors;
}

let onSubmit = (fields, dispatch) => {
  dispatch(postEmailConfirmation())
  .then((token) => {
    dispatch(push(`/thank_you/${token}`));
  });
}

const RsvpForm = (props) => {
  return(
    <div id="rsvp-page">
      <div className="rsvp-form">
        <form onSubmit={props.handleSubmit}>
          <Row>
            <Column small={12} medium={6}>
              <RsvpWelcomeContainer token={props.params.token}/>
              <RsvpYesNoQuestions />
            </Column>
            <Column small={12} medium={6}>
              <RsvpEventDetailsContainer />
            </Column>
          </Row>
          <RsvpAdditionalQuestionsContainer />
        </form>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'emailConfirmation',
  validate,
  onSubmit
})(RsvpForm);

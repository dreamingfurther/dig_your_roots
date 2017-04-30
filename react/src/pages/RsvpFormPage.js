import React from 'react';
import { Row, Column, Block, Breakpoints } from 'react-foundation';
import { reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import { postEmailConfirmationAccept, postEmailConfirmationDecline } from '../actions/postEmailConfirmation';
import RsvpQuestionsContainer from '../containers/RsvpQuestionsContainer';
import RsvpWelcomeContainer from '../containers/RsvpWelcomeContainer';
import RsvpEventDetailsContainer from '../containers/RsvpEventDetailsContainer';
import YesNo from '../components/rsvpQuestions/YesNo';

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
  if(fields.rsvp == "No") {
    dispatch(postEmailConfirmationDecline())
    .then((token) => {
      dispatch(push(`/thank_you/${token}`));
    });
  } else {
    dispatch(postEmailConfirmationAccept())
    .then((token) => {
      dispatch(push(`/thank_you/${token}`));
    });
  }
}

const RsvpForm = (props) => {
  return(
    <div id="rsvp-page" className="pam">
      <div className="rsvp-form">
        <form onSubmit={props.handleSubmit}>
          <Row>
            <Column small={12} medium={6}>
              <RsvpWelcomeContainer token={props.params.token}/>
              <Block showOnlyFor={Breakpoints.SMALL}>
                <RsvpEventDetailsContainer />
              </Block>
              <div className='medium-up-yes-no'>
                <YesNo />
              </div>
            </Column>
            <Column small={12} medium={6}>
              <Block hideOnlyFor={Breakpoints.SMALL}>
                <RsvpEventDetailsContainer />
              </Block>
            </Column>
          </Row>
          <RsvpQuestionsContainer />
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

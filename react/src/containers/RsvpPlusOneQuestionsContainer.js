import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import RsvpAttendingTextareaQuestions from '../components/RsvpAttendingTextareaQuestions';
import RsvpFoodQuestions from '../components/RsvpFoodQuestions';

const RsvpPlusOneQuestionsContainer = (props) => {
  let plusOneNameQuestion, foodQuestions, finalQuestions;

  if(props.plusOneAttending === "Yes") {
    plusOneNameQuestion = (
      <div>
        <label>{ "What's their name?" }</label>
        <Field name="plusOneName" component="input" type="text" placeholder="Optional" id="rsvp-plus-one-name" />
      </div>
    )
  } else if( props.plusOneAttending === "No"){
    plusOneNameQuestion = null
  }

  if(props.plusOneAttending != undefined) {
    if(props.eventHasFood) {
      foodQuestions = <RsvpFoodQuestions plusOneAttending={ props.plusOneAttending } />
    } else {
      finalQuestions = <RsvpAttendingTextareaQuestions />
    }
  }
  if(props.foodChoice != undefined) {
    finalQuestions = <RsvpAttendingTextareaQuestions />
  }

  return(
    <div>
      <label>Would you like to bring a plus one?*</label>
      <div className="note">{ `* Note: All +1's must be 21+` }</div>
      <label>
        <Field name="plusOneAttending" component="input" type="radio" value="Yes" id="rsvp-guest-yes"/>
        Yes
      </label>
      <label>
        <Field name="plusOneAttending" component="input" type="radio" value="No" id="rsvp-guest-no"/>
        No
      </label>
      <label>
        <Field name="plusOneAttending" component="input" type="radio" value="Maybe" id="rsvp-guest-maybe"/>
        { "I'll get back to you" }
      </label>
      { plusOneNameQuestion }
      { foodQuestions }
      { finalQuestions }
    </div>
  )
}

let mapStateToProps = (store) => {
  let formValues = { rsvp: false };
  if(store.form.emailConfirmation.values != undefined){
    formValues.plusOneAttending = store.form.emailConfirmation.values.plusOneAttending
    formValues.foodChoice = store.form.emailConfirmation.values.foodChoice
  }
  return {
    eventHasFood: store.emailConfirmation.event.foodOptions,
    plusOneAttending: formValues.plusOneAttending,
    foodChoice: formValues.foodChoice
  }
}

export default connect(
  mapStateToProps,
  {}
)(RsvpPlusOneQuestionsContainer)

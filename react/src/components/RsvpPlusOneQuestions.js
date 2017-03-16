import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import RsvpAttendingTextareaQuestions from './RsvpAttendingTextareaQuestions';

const RsvpPlusOneQuestions = (props) => {
  let plusOneNameQuestion, finalQuestions;

  if(props.plusOneAttending === "Yes") {
    plusOneNameQuestion = (
      <div>
        <label>{ "What's their name?" }</label>
        <Field name="plusOneName" component="input" type="text" placeholder="Optional" />
      </div>
    )
  } else if( props.plusOneAttending === "No"){
    plusOneNameQuestion = null
  }

  if(props.plusOneAttending != undefined) {
    finalQuestions = <RsvpAttendingTextareaQuestions />
  }

  return(
    <div>
      <label>Would you like to bring a plus one?*</label>
      <div className="note">{ `* Note: All +1's must be 21+` }</div>
      <label>
        <Field name="plusOneAttending" component="input" type="radio" value="Yes" />
        Yes
      </label>
      <label>
        <Field name="plusOneAttending" component="input" type="radio" value="No" />
        No
      </label>
      <label>
        <Field name="plusOneAttending" component="input" type="radio" value="Maybe" />
        { "I'll get back to you" }
      </label>
      { plusOneNameQuestion }
      { finalQuestions }
    </div>
  )
}

let mapStateToProps = (store) => {
  let formValues = { rsvp: false };
  if(store.form.emailConfirmation.values != undefined){
    formValues.plusOneAttending = store.form.emailConfirmation.values.plusOneAttending
  }
  console.log(formValues.plusOneAttending);
  return {
    plusOneAttending: formValues.plusOneAttending
  }
}

export default connect(
  mapStateToProps,
  {}
)(RsvpPlusOneQuestions)

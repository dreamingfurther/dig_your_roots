import React from 'react';
import { Field } from 'redux-form';
import RsvpPlusOneQuestionsContainer from '../containers/RsvpPlusOneQuestionsContainer';
import RsvpAttendingTextareaQuestions from './RsvpAttendingTextareaQuestions';
import RsvpFoodQuestions from './RsvpFoodQuestions';

const RsvpAttendingQuestionsWrapper = ({ plusOne, eventHasFood, foodChoice, formError }) => {
  let secondStepQuestions, foodQuestions;

  if(plusOne === true){
    secondStepQuestions = <RsvpPlusOneQuestionsContainer />

  } else {
    if(eventHasFood) {
      foodQuestions = <RsvpFoodQuestions plusOneAttending= { false } />

      if(foodChoice != undefined) {
        secondStepQuestions = <RsvpAttendingTextareaQuestions formError={formError}/>
      }
    } else {
      secondStepQuestions = <RsvpAttendingTextareaQuestions formError={formError}/>
    }
  }

  return(
    <div>
      { foodQuestions }
      { secondStepQuestions }
    </div>
  )
}

export default RsvpAttendingQuestionsWrapper;

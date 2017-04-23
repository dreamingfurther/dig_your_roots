import React from 'react';
import { Field } from 'redux-form';
import RsvpPlusOneQuestionsContainer from '../containers/RsvpPlusOneQuestionsContainer';
import RsvpAttendingTextareaQuestions from './RsvpAttendingTextareaQuestions';
import RsvpFoodQuestions from './RsvpFoodQuestions';

const RsvpAttendingQuestionsWrapper = ({ plusOne, eventHasFood, foodChoice }) => {
  let secondStepQuestions, foodQuestions;

  if(plusOne === true){
    secondStepQuestions = <RsvpPlusOneQuestionsContainer />

  } else {
    if(eventHasFood) {
      foodQuestions = <RsvpFoodQuestions plusOneAttending= { false } />

      if(foodChoice != undefined) {
        secondStepQuestions = <RsvpAttendingTextareaQuestions />
      }
    } else {
      secondStepQuestions = <RsvpAttendingTextareaQuestions />
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

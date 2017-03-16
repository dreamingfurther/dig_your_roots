import React from 'react';
import { Field } from 'redux-form';
import RsvpPlusOneQuestions from './RsvpPlusOneQuestions';
import RsvpAttendingTextareaQuestions from './RsvpAttendingTextareaQuestions';

const RsvpAttendingQuestionsWrapper = ({ plusOne }) => {
  let secondStepQuestions;

  if(plusOne === true){
    secondStepQuestions = <RsvpPlusOneQuestions />
  } else {
    secondStepQuestions = <RsvpAttendingTextareaQuestions />
  }

  return(
    <div>
      { secondStepQuestions }
    </div>
  )
}

export default RsvpAttendingQuestionsWrapper;

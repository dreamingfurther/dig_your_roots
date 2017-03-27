import React from 'react';
import { Field } from 'redux-form';
import RsvpPlusOneQuestionsContainer from '../containers/RsvpPlusOneQuestionsContainer';
import RsvpAttendingTextareaQuestions from './RsvpAttendingTextareaQuestions';

const RsvpAttendingQuestionsWrapper = ({ plusOne }) => {
  let secondStepQuestions;

  if(plusOne === true){
    secondStepQuestions = <RsvpPlusOneQuestionsContainer />
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

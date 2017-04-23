import React from 'react';
import { Row, Column } from 'react-foundation';
import RsvpPlusOneQuestion from '../components/RsvpPlusOneQuestion';
import RsvpPlusOneQuestionName from '../components/RsvpPlusOneQuestionName';
import RsvpFoodQuestions from './RsvpFoodQuestions';
import RsvpFoodQuestionsPlusOne from './RsvpFoodQuestionsPlusOne';
import RsvpPhonePasswordQuestions from './RsvpPhonePasswordQuestions';
import RsvpAttendingTextareaQuestions from './RsvpAttendingTextareaQuestions';
import RsvpExtraDetailsQuestion from './RsvpExtraDetailsQuestion';
import RsvpExtraQuestionForUsQuestion from './RsvpExtraQuestionForUsQuestion';
import RsvpSubmit from './RsvpSubmit';

const RsvpAttendeeQuestionManager = ({ plusOne, eventHasFood, foodChoice, formError, plusOneAttending }) => {
  let plusOneQuestion, plusOneName, cell1, cell2, cell3, cell4, rsvpButton;

  if(plusOne){
    plusOneQuestion = <RsvpPlusOneQuestion />
  }
  if(plusOne && plusOneAttending == "Yes"){
    plusOneName = <RsvpPlusOneQuestionName />
  }


  if(eventHasFood && plusOne && plusOneAttending != undefined){
    cell1 = <RsvpFoodQuestions />
  }
  if(eventHasFood && plusOne && plusOneAttending == "Yes"){
    cell2 = <RsvpFoodQuestionsPlusOne />
  }
  if(eventHasFood && plusOne && foodChoice != undefined && plusOneAttending != "Yes"){
    cell2 = <RsvpPhonePasswordQuestions />
    cell3 = <RsvpExtraDetailsQuestion />
    cell4 = <RsvpExtraQuestionForUsQuestion />
    rsvpButton = <RsvpSubmit />
  }
  if(eventHasFood && plusOne && foodChoice != undefined && plusOneAttending == "Yes"){
    cell3 = <RsvpAttendingTextareaQuestions />
    cell4 = <RsvpPhonePasswordQuestions />
    rsvpButton = <RsvpSubmit />
  }
  if(eventHasFood && !plusOne){
    cell1 = <RsvpFoodQuestions />
  }
  if(eventHasFood && !plusOne && foodChoice != undefined){
    cell2 = <RsvpPhonePasswordQuestions />
    cell3 = <RsvpExtraDetailsQuestion />
    cell4 = <RsvpExtraQuestionForUsQuestion />
    rsvpButton = <RsvpSubmit />
  }


  if(!eventHasFood && !plusOne){
    cell1 = <RsvpAttendingTextareaQuestions />
    cell2 = <RsvpPhonePasswordQuestions />
    rsvpButton = <RsvpSubmit />
  }
  if(!eventHasFood && plusOne && plusOneAttending != undefined){
    cell1 = <RsvpAttendingTextareaQuestions />
    cell2 = <RsvpPhonePasswordQuestions />
    rsvpButton = <RsvpSubmit />
  }

  return(
    <div>
      <Row>
        { plusOneQuestion }
        { plusOneName }
      </Row>
      <Row>
        <Column small={12} medium={6}>{ cell1 }</Column>
        <Column small={12} medium={6}>{ cell2 }</Column>
      </Row>
      <Row>
        <Column small={12} medium={6}>{ cell3 }</Column>
        <Column small={12} medium={6}>{ cell4 }</Column>
      </Row>
      <Row>
        { formError && <strong>{formError}</strong> }
        { rsvpButton }
      </Row>
    </div>
  )
}

export default RsvpAttendeeQuestionManager;

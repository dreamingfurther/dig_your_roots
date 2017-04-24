import React from 'react';
import { Row, Column } from 'react-foundation';
import ExtraDetails       from './rsvpQuestions/ExtraDetails';
import ExtraQuestionForUs from './rsvpQuestions/ExtraQuestionForUs';
import Food               from './rsvpQuestions/Food';
import FoodPlusOne        from './rsvpQuestions/FoodPlusOne';
import PhonePassword      from './rsvpQuestions/PhonePassword';
import PlusOne            from './rsvpQuestions/PlusOne';
import PlusOneName        from './rsvpQuestions/PlusOneName';
import Textarea           from './rsvpQuestions/Textarea';
import Submit             from './rsvpQuestions/Submit';

const RsvpAttendeeQuestionManager = ({ plusOne, eventHasFood, foodChoice, formError, plusOneAttending }) => {
  let plusOneQuestion, plusOneName, cell1, cell2, cell3, cell4, rsvpButton;

  if(plusOne){
    plusOneQuestion = <PlusOne />
  }
  if(plusOne && plusOneAttending == "Yes"){
    plusOneName = <PlusOneName />
  }


  if(eventHasFood && plusOne && plusOneAttending != undefined){
    cell1 = <Food />
  }
  if(eventHasFood && plusOne && plusOneAttending == "Yes"){
    cell2 = <FoodPlusOne />
  }
  if(eventHasFood && plusOne && foodChoice != undefined && plusOneAttending == "Yes"){
    cell3 = <Textarea />
    cell4 = <PhonePassword />
    rsvpButton = <Submit />
  }
  if(eventHasFood && plusOne && foodChoice != undefined && plusOneAttending != "Yes"){
    cell2 = <PhonePassword />
    cell3 = <ExtraDetails />
    cell4 = <ExtraQuestionForUs />
    rsvpButton = <Submit />
  }
  if(eventHasFood && !plusOne){
    cell1 = <Food />
  }
  if(eventHasFood && !plusOne && foodChoice != undefined){
    cell2 = <PhonePassword />
    cell3 = <ExtraDetails />
    cell4 = <ExtraQuestionForUs />
    rsvpButton = <Submit />
  }


  if(!eventHasFood && !plusOne){
    cell1 = <Textarea />
    cell2 = <PhonePassword />
    rsvpButton = <Submit />
  }
  if(!eventHasFood && plusOne && plusOneAttending != undefined){
    cell1 = <Textarea />
    cell2 = <PhonePassword />
    rsvpButton = <Submit />
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

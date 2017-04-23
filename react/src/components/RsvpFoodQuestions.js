import React from 'react';
import { Field } from 'redux-form';
import RsvpFoodQuestionsPlusOne from './RsvpFoodQuestionsPlusOne';

const RsvpFoodQuestions = (props) => {
  let plusOneFoodOptions;

  if(props.plusOneAttending === "Yes") {
    plusOneFoodOptions = <RsvpFoodQuestionsPlusOne />
  }

  return(
    <div>
      <div>
        <label>What main did would you like for dinner?</label>
        <label>
          <Field name="foodChoice" component="input" type="radio" value="beef" id="rsvp-beef"/>
          Beef Tenderloin.
        </label>
        <label>
          <Field name="foodChoice" component="input" type="radio" value="chicken" id="rsvp-chicken"/>
          Locally sourced Chicken Breast.
        </label>
        <label>
          <Field name="foodChoice" component="input" type="radio" value="fish" id="rsvp-fish"/>
          Fresh local catch (fish).
        </label>
        <label>
          <Field name="foodChoice" component="input" type="radio" value="other" id="rsvp-other"/>
          Vegetarian/Vegan dietary restriction.
        </label>
      </div>
      { plusOneFoodOptions }
    </div>
  )
}

export default RsvpFoodQuestions;

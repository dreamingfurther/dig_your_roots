import React from 'react';
import { Field } from 'redux-form';

const FoodPlusOne = () => {
  return(
    <div>
      <label>What main did would your plus one like for dinner?</label>
      <label>
        <Field name="foodChoicePlusOne" component="input" type="radio" value="beef" id="rsvp-plus-beef"/>
        Beef Tenderloin.
      </label>
      <label>
        <Field name="foodChoicePlusOne" component="input" type="radio" value="chicken" id="rsvp-plus-chicken"/>
        Locally sourced Chicken Breast.
      </label>
      <label>
        <Field name="foodChoicePlusOne" component="input" type="radio" value="fish" id="rsvp-plus-fish"/>
        Fresh local catch (fish).
      </label>
      <label>
        <Field name="foodChoicePlusOne" component="input" type="radio" value="other" id="rsvp-plus-other"/>
        Vegetarian/Vegan dietary restriction.
      </label>
    </div>
  )
}

export default FoodPlusOne;

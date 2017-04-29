import React from 'react';
import { Field } from 'redux-form';

const renderField = ({ input, type, id, label }) => (
  <div className="mbl">
    <div className="fancy-checkbox">
      <input {...input} type={type} id={id}/>
      <div className="background"></div>
      <label>{ label }</label>
    </div>
  </div>
)

const FoodPlusOne = () => {
  return(
    <div>
      <h1>What main did would you like?</h1>
      <Field
        label="Beef Tenderloin."
        name="foodChoicePlusOne"
        component={renderField}
        type="radio"
        value="beef"
        id="rsvp-plus-beef"
      />
      <Field
        label="Locally sourced Chicken Breast."
        name="foodChoicePlusOne"
        component={renderField}
        type="radio"
        value="chicken"
        id="rsvp-plus-chicken"
      />
      <Field
        label="Fresh local catch (fish)."
        name="foodChoicePlusOne"
        component={renderField}
        type="radio"
        value="fish"
        id="rsvp-plus-fish"
      />
      <Field
        label="Vegetarian/Vegan dietary restriction."
        name="foodChoicePlusOne"
        component={renderField}
        type="radio"
        value="other"
        id="rsvp-plus-other"
      />
    </div>
  )
}

export default FoodPlusOne;

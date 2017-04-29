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

const Food = () => {
  return(
    <div>
      <h1>What main entre would you like?</h1>
      <Field
        label="Beef Tenderloin."
        name="foodChoice"
        component={renderField}
        type="radio"
        value="beef"
        id="rsvp-beef"
      />
      <Field
        label="Locally sourced Chicken Breast."
        name="foodChoice"
        component={renderField}
        type="radio"
        value="chicken"
        id="rsvp-chicken"
      />
      <Field
        label="Fresh local catch (fish)."
        name="foodChoice"
        component={renderField}
        type="radio"
        value="fish"
        id="rsvp-fish"
      />
      <Field
        label="Vegetarian/Vegan dietary restriction."
        name="foodChoice"
        component={renderField}
        type="radio"
        value="other"
        id="rsvp-other"
      />
    </div>
  )
}

export default Food;

import React from 'react';
import { Field } from 'redux-form';
import { Row, Column } from 'react-foundation';

const RsvpPlusOneQuestionName = () => {
  return(
    <div>
      <Column small={12} medium={4} className="mbl">
        <h1>
          { "What is their name?" }
        </h1>
      </Column>
      <Column small={12} medium={8} className="mbl">
        <Field name="plusOneName" component="input" type="text" placeholder="Optional" id="rsvp-plus-one-name" />
      </Column>
    </div>
  )
}

export default RsvpPlusOneQuestionName;

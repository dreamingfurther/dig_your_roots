import React from 'react';
import { Field } from 'redux-form';

const ExtraQuestionForUs = () => {
  return(
    <div>
      <label>
        Do you have any questions about the event (further details not provided/etc)?
      </label>
      <Field name="questions" component="textarea" id="rsvp-questions" />
    </div>
  )
}

export default ExtraQuestionForUs;

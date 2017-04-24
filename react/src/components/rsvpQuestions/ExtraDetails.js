import React from 'react';
import { Field } from 'redux-form';

const ExtraDetails = () => {
  return(
    <div>
      <label>
        Is there anything we should know for your RSVP (such as dietary restrictions)?
      </label>
      <Field name="notes" component="textarea" id="rsvp-notes" />
    </div>
  )
}

export default ExtraDetails;

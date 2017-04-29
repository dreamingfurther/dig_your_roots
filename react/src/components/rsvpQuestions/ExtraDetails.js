import React from 'react';
import { Field } from 'redux-form';

const ExtraDetails = () => {
  return(
    <div className="text-questions">
      <p>
        Is there anything we should know for your RSVP (such as dietary restrictions)?
      </p>
      <Field name="notes" component="textarea" id="rsvp-notes" />
    </div>
  )
}

export default ExtraDetails;

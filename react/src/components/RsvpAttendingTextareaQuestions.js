import React from 'react';
import { Field } from 'redux-form';
import RsvpSubmit from './RsvpSubmit';

const RsvpAttendingTextareaQuestions = () => {
  return(
    <div>
      <label>
        Is there anything we should know for your RSVP (such as dietary restrictions)?
      </label>
      <Field name="notes" component="textarea" id="rsvp-notes" />

      <label>
        Do you have any questions about the event?
      </label>
      <Field name="questions" component="textarea" id="rsvp-questions" />

      <RsvpSubmit />
    </div>
  )
}

export default RsvpAttendingTextareaQuestions;

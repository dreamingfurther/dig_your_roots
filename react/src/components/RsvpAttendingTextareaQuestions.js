import React from 'react';
import { Field } from 'redux-form';
import RsvpSubmit from './RsvpSubmit';

const RsvpAttendingTextareaQuestions = () => {
  return(
    <div>
      <label>
        Is there anything we should know for your RSVP (such as dietary restrictions)?
      </label>
      <Field name="notes" component="textarea" />

      <label>
        Do you have any questions about the event?
      </label>
      <Field name="questions" component="textarea" />

      <RsvpSubmit />
    </div>
  )
}

export default RsvpAttendingTextareaQuestions;

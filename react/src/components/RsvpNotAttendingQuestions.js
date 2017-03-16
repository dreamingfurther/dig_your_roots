import React from 'react';
import { Field } from 'redux-form';
import RsvpSubmit from './RsvpSubmit';

const RsvpNotAttendingQuestions = () => {
  return(
    <div>
      <label>
        Sorry to miss you! Feel free to leave us a note.
      </label>
      <Field name="notes" component="textarea" id="rsvp-excuse" />

      <RsvpSubmit />
    </div>
  )
}

export default RsvpNotAttendingQuestions;

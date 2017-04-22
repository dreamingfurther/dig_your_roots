import React from 'react';
import { Field } from 'redux-form';
import RsvpSubmit from './RsvpSubmit';

const RsvpAttendingTextareaQuestions = () => {
  return(
    <div>
      <label>
        Phone number
      </label>
      <Field name="phone" component="input" id="rsvp-phone" />

      <label>
        Password
      </label>
      <Field
        name="password"
        component="input"
        type='password'
        value='Password'
        id="rsvp-password"
        placeholder='password'
      />

      <label>
        Password Confirmation
      </label>
      <Field
        name="passwordConfirmation"
        component="input"
        type='password'
        value='passwordConfirmation'
        id="rsvp-rsvp-password-confirmation"
        placeholder='password confirmation'
      />

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

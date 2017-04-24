import React from 'react';
import { Field } from 'redux-form';
import Submit from './Submit';

const NotAttending = () => {
  return(
    <div>
      <label>
        Sorry to miss you! Feel free to leave us a note.
      </label>
      <Field name="notes" component="textarea" id="rsvp-excuse" />

      <Submit />
    </div>
  )
}

export default NotAttending;

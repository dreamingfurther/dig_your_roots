import React from 'react';
import { Field } from 'redux-form';
import Submit from './Submit';

const NotAttending = () => {
  return(
    <div>
      <p>
        Sorry to miss you! Feel free to leave us a note.
      </p>
      <Field name="notes" component="textarea" id="rsvp-excuse" />

      <Submit />
    </div>
  )
}

export default NotAttending;

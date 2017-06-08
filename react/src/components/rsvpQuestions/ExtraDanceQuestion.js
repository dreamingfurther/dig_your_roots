import React from 'react';
import { Field } from 'redux-form';

const ExtraDanceQuestion = () => {
  return(
    <div className="text-questions">
      <p>
        You will dance if we play what song?
      </p>
      <Field name="danceQuestion" component="textarea" id="rsvp-dance-question" />
    </div>
  )
}

export default ExtraDanceQuestion;

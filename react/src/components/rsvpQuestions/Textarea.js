import React from 'react';
import ExtraDetails from './ExtraDetails';
import ExtraQuestionForUs from './ExtraQuestionForUs';
import ExtraDanceQuestion from './ExtraDanceQuestion';

const Textarea = ({ eventHasDance }) => {

  let danceQuestion;
  if (eventHasDance) {
    danceQuestion = <ExtraDanceQuestion />
  }

  return(
    <div>
      { danceQuestion }
      <ExtraDetails />
      <ExtraQuestionForUs />
    </div>
  )
}

export default Textarea;

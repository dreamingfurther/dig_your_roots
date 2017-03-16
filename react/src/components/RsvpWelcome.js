import React from 'react';
import { Row, Column } from 'react-foundation';

const RsvpWelcome = ({ firstName, rsvpDescription }) => {
  return(
    <div className="rsvp-welcome">
      <h1>Hi { firstName }!</h1>
      <p>{ rsvpDescription }</p>
    </div>
  )
}

export default RsvpWelcome;

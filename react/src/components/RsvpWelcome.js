import React from 'react';
import { Row, Column } from 'react-foundation';

const RsvpWelcome = ({ firstName, rsvpDescription }) => {
  return(
    <div className="rsvp-welcome">
      <Row>
        <Column small={12} medium={8} offsetOnMedium={2}>
          <h1>Hi { firstName }!</h1>
          <p>{ rsvpDescription }</p>
        </Column>
      </Row>
    </div>
  )
}

export default RsvpWelcome;

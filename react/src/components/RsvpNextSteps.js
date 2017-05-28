import React from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router';

const RsvpNextSteps = (props) => {
  return(
    <Column small={12} medium={10} offsetOnMedium={1}>
      <Column small={12} medium={6} className="phn">
        <Link to={`/events/${props.eventId}`}>
          <div className="selector-tile mhm">
            <h1>
              { `${props.eventName} Details` }
            </h1>
          </div>
        </Link>
      </Column>
      <Column small={12} medium={6} className="phn">
        <Link to="/events">
          <div className="selector-tile mhm">
            <h1>
              All Your Events
            </h1>
          </div>
        </Link>
      </Column>
    </Column>
  )
}

export default RsvpNextSteps;

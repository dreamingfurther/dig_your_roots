import React from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router';

const RsvpNextSteps = (props) => {
  return(
    <Row>
      <Column small={12} medium={4}>
        <Link to="/">Home Page</Link>
      </Column>
      <Column small={12} medium={4}>
        <Link to={`/events/${props.eventId}`}>
          { `${props.eventName} Details` }
        </Link>
      </Column>
      <Column small={12} medium={4}>
        <Link to="/events">All Your Events</Link>
      </Column>
    </Row>
  )
}

export default RsvpNextSteps;

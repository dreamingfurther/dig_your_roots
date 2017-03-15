import React from 'react';
import { Row, Column } from 'react-foundation';
import RsvpShowMore from './RsvpShowMore'

const RsvpEventDetails = ({ event }) => {
  let displayedTime;
  if(event.time != undefined) {
    displayedTime = ` - ${event.time}`
  }

  return(
    <div className="rsvp-event-details">
      <Row>
        <Column small={12} medium={8} offsetOnMedium={2}>
          <h1>{ event.name }</h1>
          <h3>{ event.date }{ displayedTime }</h3>
          <p>{ `${event.city}, ${event.state}` }</p>
          <RsvpShowMore details={ event.details } />
        </Column>
      </Row>
    </div>
  )
}

export default RsvpEventDetails;

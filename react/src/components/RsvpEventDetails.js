import React from 'react';
import { Row, Column } from 'react-foundation';
import RsvpShowMoreContainer from '../containers/RsvpShowMoreContainer'

const RsvpEventDetails = ({ event }) => {
  let displayedTime;
  if(event.time != undefined) {
    displayedTime = ` - ${event.time}`
  }

  return(
    <div className="rsvp-event-details">
      <h1>{ event.name }</h1>
      <h3>{ event.date }{ displayedTime }</h3>
      <p>{ `${event.city}, ${event.state}` }</p>
      <RsvpShowMoreContainer details={ event.details } />
    </div>
  )
}

export default RsvpEventDetails;

import React from 'react';
import { Link } from 'react-router';
import { Column } from 'react-foundation';

const EventTile = ({ event }) => {
  let eventRsvp, rsvpStatus, eventLink;

  if(event.rsvp === null) {
    eventRsvp = 'RSVP required';
    rsvpStatus = 'rsvp-required';
    eventLink = `/email_confirmation/${event.rsvpCode}`;
  } else {
    eventLink = `/events/${event.id}`
  }

  return(
    <Column small={12} medium={6} className="phn" key={event.id}>
      <Link to={ eventLink } id={ `event-${event.id}` } >
        <div className={`selector-tile mhm ${rsvpStatus}`}>
          <h1>
            { event.name }
          </h1>
          { eventRsvp }
        </div>
      </Link>
    </Column>
  )
}

export default EventTile;

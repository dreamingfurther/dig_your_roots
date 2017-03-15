import React from 'react';
import { Row, Column } from 'react-foundation';

const RsvpShowMore = ({ details }) => {
  let eventDetails;
  if (details != undefined) {
    eventDetails = Object.keys(details).map((key) => {
      return(
        <p key={ key }>
          { key } - { details[key] }
        </p>
      )
    })
  }

  return(
    <div className="show-more">
      { eventDetails }
    </div>
  )
}

export default RsvpShowMore;

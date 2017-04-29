import React from 'react';
import { Row, Column } from 'react-foundation';

const EventDetails = (props) => {
  let displayedTime;
  let event = props.event;
  if(event.time != undefined) {
    displayedTime = ` - ${event.time}`
  }

  let eventDetails;
  if(event.details != undefined) {
    eventDetails = Object.keys(event.details).map((key) => {
      let formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
      return(
        <Row key={ key }>
          <Column small={12} medium={12} className="mbl">
            <p>
              { formattedKey }
            </p>
            { event.details[key] }
          </Column>
        </Row>
      )
    })
  }

  return(
    <div>
      <Row>
        <Column small={12} medium={12} className="mbl">
          <p>
            { 'Where: ' }
          </p>
          { `${event.city}, ${event.state}` }
        </Column>
        <Column small={12} medium={12} className="mbl">
          <p>
            { 'When: ' }
          </p>
          { event.date }{ displayedTime }
        </Column>
      </Row>
      <Row>
        <Column small={12} medium={12} className="mbl phl">
          <p>
            { 'What: ' }
          </p>
          { event.description }
        </Column>
      </Row>
      { eventDetails }
    </div>
  )
}

export default EventDetails;

import React from 'react';
import { Column } from 'react-foundation';
import { railsAssetImagePath } from '../constants/railsAssetImagePath';

const EventBasicInfo = (props) => {
  let { time, date, name, picture, city, state, description } = props.event || {}
  let displayedTime;
  if(time != undefined) {
    displayedTime = ` - ${time}`
  }

  return(
    <Column small={12} medium={12} className="mbl phn">
      <Column small={12} medium={6} className="mbl">
        <Column small={12} medium={12} className="mbl">
          <h1 className="mtn">
            { name }
          </h1>
          <img className="event-image" src={railsAssetImagePath(picture)}></img>
        </Column>
        <Column small={12} medium={6} className="mbl">
          <div className='black-text'>
            { 'Where: ' }
          </div>
          { `${city}, ${state}` }
        </Column>
        <Column small={12} medium={6} className="mbl">
          <div className='black-text'>
            { 'When: ' }
          </div>
          { date }{ displayedTime }
        </Column>
      </Column>
      <Column small={12} medium={6} className="mbl phl">
        <div className='event-description'>
          { description }
        </div>
      </Column>
    </Column>
  )
}

export default EventBasicInfo;

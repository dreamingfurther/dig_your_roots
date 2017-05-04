import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Row, Column, Block, Breakpoints } from 'react-foundation';

const EventDetailSelector = (props) => {
  let { details } = props.event || {};
  let { selectedDetail, selectDetail } = props;
  let eventDetailNames;
  let detailDescription = '';

  if(details != undefined) {
    detailDescription = details[selectedDetail];
    eventDetailNames = Object.keys(details).map((key) => {
      let formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
      let selectedStyle = '';
      let smallDetails;
      let viewDetail = () => {
        selectDetail(key);
      }
      if(selectedDetail == key) {
        selectedStyle = 'selected'
        smallDetails = (
          <Block showOnlyFor={Breakpoints.SMALL}>
            <Column small={12} className="phl">
              <ReactMarkdown source={detailDescription} className='selected-details' />
            </Column>
          </Block>
        )
      }
      return(
        <div key={ key }>
          <Column small={12} medium={6} className="">
            <a>
              <div onClick={ viewDetail } className={`detail-selector ${selectedStyle}`}>
                { formattedKey }
              </div>
            </a>
          </Column>
          { smallDetails }
        </div>
      )
    })
  }

  return(
    <Column small={12} medium={12} className="phn">
      <Column small={12} large={6} className="">
        { eventDetailNames }
      </Column>
      <Block hideOnlyFor={Breakpoints.SMALL} className='medium-up-yes-no'>
        <Column small={12} large={6} className="phl">
          <ReactMarkdown source={detailDescription} className='selected-details' />
        </Column>
      </Block>
    </Column>
  )
}

export default EventDetailSelector;

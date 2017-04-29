import React from 'react';
import { connect } from 'react-redux';
import { Row, Column } from 'react-foundation';
import { toggleShowHideDetails } from '../actions/showHideEventDetails';

const RsvpShowMoreContainer = (props) => {
  let eventDetails, showMore, showText;

  if((props.details != undefined) && props.showDetails) {
    eventDetails = Object.keys(props.details).map((key) => {
      let formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
      return(
        <div key={ key } className="mbm">
          <p className="mbn">
            { formattedKey }:
          </p>
          { props.details[key] }
        </div>
      )
    })
  }

  if((props.details != undefined) && (Object.keys(props.details).length > 0) && props.showDetails) {
    showText = <a>Show Less</a>;
  } else if((props.details != undefined) && (Object.keys(props.details).length > 0)) {
    showText = <a>Show More...</a>;
  } else {
    showText = "";
  }

  if(props.details != undefined) {
    showMore = <div onClick={props.toggleShowHideDetails}>{ showText }</div>
  }

  return(
    <div className="show-more">
      <div className="mbm">
        { showMore }
      </div>
      <div className="event-details">
        { eventDetails }
      </div>
    </div>
  )
}

let mapStateToProps = (store) => {
  return {
    showDetails: store.showDetails.more,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    toggleShowHideDetails: () => { dispatch(toggleShowHideDetails()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RsvpShowMoreContainer)

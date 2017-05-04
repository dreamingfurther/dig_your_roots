import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { Row, Column } from 'react-foundation';
import { toggleShowHideDetails } from '../actions/showHideEventDetails';

const RsvpShowMoreContainer = (props) => {
  let eventDetails, showMore, showText;
  let source = '';

  if((props.details != undefined) && props.showDetails) {
    let source = props.details['itinerary']
    eventDetails = <ReactMarkdown source={source} />
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

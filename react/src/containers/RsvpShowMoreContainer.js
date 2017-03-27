import React from 'react';
import { connect } from 'react-redux';
import { Row, Column } from 'react-foundation';
import { toggleShowHideDetails } from '../actions/showHideEventDetails';

const RsvpShowMoreContainer = (props) => {
  let eventDetails, showMore, showText;

  if((props.details != undefined) && props.showDetails) {
    eventDetails = Object.keys(props.details).map((key) => {
      return(
        <p key={ key }>
          { key } - { props.details[key] }
        </p>
      )
    })
  }

  if((props.details != undefined) && (Object.keys(props.details).length > 0) && props.showDetails) {
    showText = <a>Show Less</a>;
  } else if((props.details != undefined) && (Object.keys(props.details).length > 0)) {
    showText = <a>Show More</a>;
  } else {
    showText = "";
  }

  if(props.details != undefined) {
    showMore = <div onClick={props.toggleShowHideDetails}>{ showText }</div>
  }

  return(
    <div className="show-more">
      { showMore }
      { eventDetails }
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

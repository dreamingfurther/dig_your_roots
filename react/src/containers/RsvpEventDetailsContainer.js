import React, { Component }  from 'react';
import { connect } from 'react-redux';
import RsvpShowMoreContainer from './RsvpShowMoreContainer'

class RsvpEventDetailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let displayedTime;
    let event = this.props.event;

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
}

let mapStateToProps = (store, ownProps) => {
  return { event: store.emailConfirmation.event }
}

let mapDispatchToProps = (dispatch) => { return {} }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RsvpEventDetailsContainer)

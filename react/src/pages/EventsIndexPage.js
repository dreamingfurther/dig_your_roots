import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Column } from 'react-foundation';

import { getUserEvents } from '../actions/getUserEvents';
import EventTile from '../components/EventTile';

class EventsIndexPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(this.props.storedUserData == undefined) {
      this.props.redirectUserToWelcome()
    }
  }

  componentDidMount() {
    if(this.props.storedUserData != undefined) {
      this.props.getUserEvents(this.props.userId);
    }
  }

  render() {
    let eventList = this.props.events.map((event) => {
      if(event.rsvp != false) {
        return <EventTile event={event} />
      }
    });

    return(
      <div id="events-index-page">
        <h2 className="top-header mbl">Your Events</h2>
        <Column small={12} medium={10} offsetOnMedium={1}>
          { eventList }
        </Column>
      </div>
    )
  }
}

let mapStateToProps = (store) => {
  return {
    userId: store.user.id,
    events: store.user.events,
    storedUserData: Cookies.get('userData')
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    redirectUserToWelcome: () => { dispatch(push('/?needToSignIn')) },
    getUserEvents: (userId) => { dispatch(getUserEvents(userId)) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(EventsIndexPage);

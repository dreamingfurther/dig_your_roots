import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Column } from 'react-foundation';

import { getUserEvents } from '../actions/getUserEvents';

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
    let eventList;
    eventList = this.props.events.map((event) => {
      return(
        <Column small={12} medium={4} offsetOnMedium={4} className="selector-tile phn">
          <h1 key={event.id}>
            <Link to={`/events/${event.id}`}>{ event.name }</Link>
          </h1>
        </Column>
      )
    });

    return(
      <div id="events-index-page">
        <h2 className="top-header mbl">Your Events</h2>
        { eventList }
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

import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getUserEvents } from '../actions/getUserEvents';

class EventsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.storedUserData = Cookies.get('userData');
  }

  componentWillMount() {
    if(this.storedUserData == undefined) {
      this.props.redirectUserToWelcome()
    }
  }

  componentDidMount() {
    if(this.storedUserData != undefined) {
      this.props.getUserEvents(this.props.userId);
    }
  }

  render() {
    let eventList;
    eventList = this.props.events.map((event) => {
      return(
        <p key={event.id}>
          <Link to={`/events/${event.id}`}>{ event.name }</Link>
        </p>
      )
    });

    return(
      <div>
        <h1>You're Events!</h1>
        { eventList }
      </div>
    )
  }
}

let mapStateToProps = (store) => {
  return {
    userId: store.user.id,
    events: store.user.events
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    redirectUserToWelcome: () => { dispatch(push('/')) },
    getUserEvents: (userId) => { dispatch(getUserEvents(userId)) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(EventsIndexPage);

import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getUserEvents } from '../actions/getUserEvents';

class EventShowPage extends Component {
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
    let eventName;
    if(this.props.event != undefined) {
      eventName = this.props.event.name
    }

    return(
      <div>
        <h1>
          <Link to='/events'>You're Events: </Link>
          { eventName }
        </h1>
      </div>
    )
  }
}

let mapStateToProps = (store, ownProps) => {
  let event = store.user.events.filter((event) => {
    return event.id === parseInt(ownProps.params.id)
  })[0]
  return {
    eventId: parseInt(ownProps.params.id),
    event: event,
    userId: store.user.id,
    storedUserData: Cookies.get('userData')
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
)(EventShowPage);

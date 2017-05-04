import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';
import Linkify from 'react-linkify';
import { getUserEvents } from '../actions/getUserEvents';
import { selectDetail } from '../actions/selectDetail';
import EventBasicInfo from '../components/EventBasicInfo';
import EventDetailSelector from '../components/EventDetailSelector';

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
    return(
      <div id="event-show-page">
        <EventBasicInfo event={this.props.event} />
        <EventDetailSelector
          event         ={ this.props.event }
          selectedDetail={ this.props.selectedDetail }
          selectDetail  ={ this.props.selectDetail }
        />
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
    storedUserData: Cookies.get('userData'),
    selectedDetail: store.selectedDetail
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    redirectUserToWelcome: () => { dispatch(push('/?needToSignIn')) },
    getUserEvents: (userId) => { dispatch(getUserEvents(userId)) },
    selectDetail: (detail) => { dispatch(selectDetail(detail)) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(EventShowPage);

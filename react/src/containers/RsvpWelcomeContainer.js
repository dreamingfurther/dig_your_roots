import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { getEmailConfirmation } from '../actions/getEmailConfirmation';

class RsvpWelcomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getEmailConfirmation(this.props.token);
  }

  componentDidUpdate() {
    if(this.props.rsvp != null) {
      this.props.redirectToThankYouPage(this.props.token);
    }
  }

  render() {
    return(
      <div className="rsvp-welcome">
        <h1>Hi { this.props.firstName }!</h1>
        <p>{ this.props.rsvpDescription }</p>
      </div>
    )
  }
}

let mapStateToProps = (store, ownProps) => {
  return {
    token: ownProps.token,
    firstName: store.emailConfirmation.guest.firstName,
    rsvp: store.emailConfirmation.guest.rsvp,
    rsvpDescription: store.emailConfirmation.event.rsvpDescription
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getEmailConfirmation: (token) => { dispatch(getEmailConfirmation(token)) },
    redirectToThankYouPage: (token) => { dispatch(push(`/thank_you/${token}?fromRsvpForm`)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RsvpWelcomeContainer)

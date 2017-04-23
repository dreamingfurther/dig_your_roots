import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { getEmailConfirmation } from '../actions/getEmailConfirmation';

class RsvpWelcomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getEmailConfirmation(this.props.token);
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
    rsvpDescription: store.emailConfirmation.event.rsvpDescription
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getEmailConfirmation: (token) => { dispatch(getEmailConfirmation(token)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RsvpWelcomeContainer)

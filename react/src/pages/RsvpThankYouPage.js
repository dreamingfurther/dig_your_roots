import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { getEmailConfirmation } from '../actions/getEmailConfirmation';
import RsvpNextSteps from '../components/RsvpNextSteps';

class RsvpThankYouPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(this.props.guest.rsvp == null) {
      this.props.getEmailConfirmation(this.props.token)
        .then(() => {
          if(this.props.rsvp == null) {
            this.props.redirectToEmailConfirmation(this.props.token);
          }
        });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let rsvpNextSteps;
    if(this.props.rsvp == true) {
      rsvpNextSteps = <RsvpNextSteps eventId={this.props.event.id} eventName={this.props.event.name}/>
    }
    return(
      <div>
        <h1 className="mbl">
          Thank you for your <span className="regular-font">RSVP</span>!
        </h1>
        { rsvpNextSteps }
      </div>
    )
  }
}

let mapStateToProps = (store, ownProps) => {
  return {
    token: ownProps.params.token,
    event: store.emailConfirmation.event,
    guest: store.emailConfirmation.guest,
    rsvp: store.emailConfirmation.guest.rsvp
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getEmailConfirmation: (token) => { return dispatch(getEmailConfirmation(token)) },
    redirectToEmailConfirmation: (token) => { dispatch(push(`/email_confirmation/${token}`)) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(RsvpThankYouPage);

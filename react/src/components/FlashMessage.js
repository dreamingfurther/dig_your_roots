import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleFlash } from '../actions/toggleFlash';

class FlashMessageContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.showFlash();
  }

  render() {
    let redirectMessage;
    let messages = {
      fromRsvpForm: "You have already RSVP'd for this event. Please reach out if you have further questions!",
      needToSignIn: "Please Sign to view this page."
    }

    if(this.props.flashVisible && (this.props.fromPage != undefined)) {
      redirectMessage =(
        <div className="flash-message-container">
          { messages[this.props.fromPage] }
          <div className="close-flash phs" onClick={ this.props.hideFlash }>
            X
          </div>
        </div>
      )
    } else {
      redirectMessage = null
    }

    return(
      <div>{ redirectMessage }</div>
    )
  }
}

let mapStateToProps = (store) => {
  return {
    fromPage: store.routing.locationBeforeTransitions.search.split('?')[1],
    flashVisible: store.showFlash
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    showFlash: () => { dispatch(toggleFlash(true)) },
    hideFlash: () => { dispatch(toggleFlash(false)) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(FlashMessageContainer);

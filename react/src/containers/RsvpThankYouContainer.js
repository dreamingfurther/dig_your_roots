import React, { Component }  from 'react';
import { connect } from 'react-redux';
// import { getUserEvents } from '../actions/getUserEvents';

class NewRsvpContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let token = this.props.token;
    // this.props.getUserEvents(token);
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}

let mapStateToProps = (store, ownProps) => {
  return {
    token: ownProps.params.token,
    userRsvpList: store.userRsvpList
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    // getUserEvents: (token) => { dispatch(getUserEvents(token)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRsvpContainer)

import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

class EventsIndexPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let storedUserData = Cookies.get('userData');
    if(storedUserData == undefined) {
      this.props.redirectUserToWelcome()
    }
  }

  render() {
    return(
      <div>
        <h1>Event Index Page</h1>
      </div>
    )
  }
}

let mapStateToProps = (store) => {
  return {}
}

let mapDispatchToProps = (dispatch) => {
  return {
    redirectUserToWelcome: () => { dispatch(push('/')) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(EventsIndexPage);

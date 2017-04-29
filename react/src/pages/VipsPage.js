import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class VipsPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if(this.props.storedUserData == undefined) {
      this.props.redirectUserToWelcome()
    }
  }

  render() {
    return(
      <div>
        VIPs Page
      </div>
    )
  }
}

let mapStateToProps = (store) => {
  return {
    storedUserData: Cookies.get('userData')
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    redirectUserToWelcome: () => { dispatch(push('/')) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(VipsPage);

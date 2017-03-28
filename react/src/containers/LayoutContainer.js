import React, { Component }  from 'react';
import cookie from 'react-cookie';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Column } from 'react-foundation';
import {
  postAuthorizeRequestSuccess, postAuthorizeRequestFailure
} from '../actions/postAuthorize';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  componentWillMount() {
    let storedUserData = cookie.load('userData')
    if(storedUserData != undefined) {
      this.props.loadUserData(storedUserData);
    }
  }

  signOut() {
    cookie.remove('userData');
    this.props.clearUserData();
  }

  render() {
    let eventsLink, photosLink, signOutLink;
    if(this.props.userLoggedIn) {
      eventsLink = <Link to='/events' >Events </Link>;
      photosLink = <Link to='/events' > Photos</Link>;
      signOutLink = <Link id="sign-out-link" onClick={ this.signOut }> Sign Out</Link>
    }

    return(
      <div>
        <div className="top-bar small-nav">
          <div className="top-bar-title text-center">
            <h1 className="lt-off-white-text">Jesse & David</h1>
            <div className="date">
              { eventsLink }
              1.27.2018
              { photosLink }
              { signOutLink }
            </div>
          </div>
        </div>
        <Row className="react-layout text-center">
          <Column small={12} medium={10} offsetOnMedium={1} className="small-opaque">
            { this.props.children }
          </Column>
        </Row>
      </div>
    )
  }
}

let mapStateToProps = (store) => {
  return {
    userLoggedIn: store.userLoggedIn
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    loadUserData: (userData) => { dispatch(postAuthorizeRequestSuccess(userData)) },
    clearUserData: () => { dispatch(postAuthorizeRequestFailure()) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(LayoutContainer);

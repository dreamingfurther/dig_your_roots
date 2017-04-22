import Cookies from 'js-cookie';
import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Column } from 'react-foundation';

import { railsAssetImagePath } from './../constants/railsAssetImagePath';
import {
  postAuthorizeRequestSuccess, postAuthorizeRequestFailure
} from '../actions/postAuthorize';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  componentWillMount() {
    let storedUserData = Cookies.get('userData');
    if(storedUserData != undefined) {
      this.props.loadUserData(storedUserData);
    }
  }

  signOut() {
    Cookies.remove('userData')
    this.props.clearUserData();
    let storedUserData = Cookies.get('userData');
    console.log(storedUserData);
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
            <img src={railsAssetImagePath("anchor-white.png")}></img>
            <h1>Jesse & David</h1>
            <div>
              { eventsLink }
              { photosLink }
              { signOutLink }
            </div>
          </div>
        </div>
        <div id="body-container">
          <Row className="react-layout text-center">
            <Column small={12} medium={10} offsetOnMedium={1} className="small-opaque main-text-area">
              { this.props.children }
            </Column>
          </Row>
        </div>
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

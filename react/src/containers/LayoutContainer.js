import React, { Component }  from 'react';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { Row, Column } from 'react-foundation';
import { railsAssetImagePath } from './../constants/railsAssetImagePath';
import { postAuthorizeRequestSuccess, postAuthorizeRequestFailure } from '../actions/postAuthorize';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  componentWillMount() {
    let storedUserData = Cookies.get('userData');
    if(storedUserData != undefined) {
      this.props.loadUserData( JSON.parse(storedUserData) );
    }
  }

  signOut() {
    Cookies.remove('userData')
    this.props.clearUserData();
    let storedUserData = Cookies.get('userData');
    this.props.redirectUserToWelcome()
  }

  render() {
    let eventsLink, signOutLink, titleTextAndImage, vipsLink;
    if(this.props.userLoggedIn) {
      eventsLink = <Link to='/events' >Events </Link>;
      signOutLink = <Link id="sign-out-link" onClick={ this.signOut }> Sign Out</Link>
      vipsLink = <Link to='/vips'> VIPs</Link>

      titleTextAndImage =
      (
        <h1 className="man">
          Jesse
          <Link to="/">
            <img className="mhs mbs" src={railsAssetImagePath("anchor-white.png")}></img>
          </Link>
          David
        </h1>
      )
    } else {
      titleTextAndImage =
      (
        <div>
          <Link to="/">
            <img className="mhs" src={railsAssetImagePath("anchor-white.png")}></img>
          </Link>
          <h1 className="man"> Jesse & David </h1>
        </div>
      )
    }

    return(
      <div>
        <div className="top-bar small-nav">
          <div className="top-bar-title text-center">
            { titleTextAndImage }
            <div>
              { vipsLink }
              { eventsLink }
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
    clearUserData: () => { dispatch(postAuthorizeRequestFailure()) },
    redirectUserToWelcome: () => { dispatch(push('/')) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(LayoutContainer);

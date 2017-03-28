import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Column } from 'react-foundation';
import { railsAssetImagePath } from './../constants/railsAssetImagePath';

const LayoutContainer = (props) => {
  let eventsLink, photosLink;
  if(props.userLoggedIn) {
    eventsLink = <Link to='/events' >Events </Link>;
    photosLink = <Link to='/events' > Photos</Link>;
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
          </div>
        </div>
      </div>
      <div id="body-container">
        <Row className="react-layout text-center">
          <Column small={12} medium={10} offsetOnMedium={1} className="small-opaque main-text-area">
            { props.children }
          </Column>
        </Row>
      </div>
    </div>
  )
}

let mapStateToProps = (store) => {
  return {
    userLoggedIn: store.userLoggedIn
  }
}

export default connect(
  mapStateToProps, {}
)(LayoutContainer);

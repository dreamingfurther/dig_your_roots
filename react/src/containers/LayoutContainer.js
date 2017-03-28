import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Column } from 'react-foundation';

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
          <h1 className="lt-off-white-text">Jesse & David</h1>
          <div className="date">
            { eventsLink }
            1.27.2018
            { photosLink }
          </div>
        </div>
      </div>
      <Row className="react-layout text-center">
        <Column small={12} medium={10} offsetOnMedium={1} className="small-opaque">
          { props.children }
        </Column>
      </Row>
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

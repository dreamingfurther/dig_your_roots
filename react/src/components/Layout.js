import React from 'react';
import { Link } from 'react-router';
import { Row, Column } from 'react-foundation';

const Layout = (props) => {
  return(
    <div>
      <div className="top-bar small-nav">
        <div className="top-bar-title text-center">
          <h1 className="lt-off-white-text">Jesse & David</h1>
          <div className="date">1.27.2018</div>

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

export default Layout;

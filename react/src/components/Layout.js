import React from 'react';
import { Link } from 'react-router';
import { Row, Column } from 'react-foundation';

const Layout = (props) => {
  return(
    <div>
      <div className="top-bar">
        <div className="top-bar-title">
          <strong><a>Site Title</a></strong>

        </div>
      </div>
      <Row className="react-layout">
        <Column small={12} medium={10} offsetOnMedium={1}>
          { props.children }
        </Column>
      </Row>
    </div>
  )
}

export default Layout;

import React from 'react';
import { Link } from 'react-router';
import { Row, Column } from 'react-foundation';
import { railsAssetImagePath } from './../constants/railsAssetImagePath';

const Layout = (props) => {
  return(
    <div>
      <div className="top-bar small-nav">
        <div className="top-bar-title text-center">
          <img src={railsAssetImagePath("anchor-white.png")}></img>
          <h1>Jesse & David</h1>
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

export default Layout;

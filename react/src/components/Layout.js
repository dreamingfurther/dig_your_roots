import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {
  return(
    <div className="top-bar">
      <div className="top-bar-title">
        <strong><a>Site Title</a></strong>
        { props.children }
      </div>
    </div>
  )
}

export default Layout;

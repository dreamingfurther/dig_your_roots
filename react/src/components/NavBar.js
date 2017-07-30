import React from 'react';
import { Link } from 'react-router';
import { Row, Column, Menu, MenuItem } from 'react-foundation';
import { railsAssetImagePath } from './../constants/railsAssetImagePath';
import NavBarLinks from './NavBarLinks';

const NavBar = (props) => {
  let navBarLinks;

  if(props.userLoggedIn) {
    navBarLinks = <NavBarLinks signOut={props.signOut} />
  }

  return (
    <div className="header-background-style">
      <div className="text-center header-anchor-style">
        <h1 className="man pam">
          Tahara
        </h1>
      </div>
      { navBarLinks }
    </div>
  )
}

export default NavBar;

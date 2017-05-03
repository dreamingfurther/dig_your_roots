import React from 'react';
import { Link } from 'react-router';
import { Row, Column, Menu, MenuItem } from 'react-foundation';

const NavBarLinks = (props) => {
  let fancyNavLink = (path, text) => {
    let linkHelper;
    return linkHelper = (text == 'Sign out') ?
      <Link id="sign-out-link" onClick={ props.signOut }>{ text }</Link> :
      <Link to={ path } >{ text }</Link>
  }

  return (
    <div className="nav-bar-links">
      <Menu className="columns medium-10 medium-offset-1 hide-for-small-only">
        <MenuItem>{ fancyNavLink('/events', 'Your Events') }</MenuItem>
        <MenuItem>{ fancyNavLink('/vips', 'V.I.P.s') }</MenuItem>
        <MenuItem>{ fancyNavLink(null, 'Sign out') }</MenuItem>
      </Menu>
    </div>
  )
}

export default NavBarLinks;

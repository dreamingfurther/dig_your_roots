import React from 'react';
import { Link } from 'react-router';
import { Row, Column, Menu, MenuItem } from 'react-foundation';

const NavBarLinks = (props) => {
  let eventsFA = (<i className="fa fa-calendar-check-o" aria-hidden="true"></i>)
  let vipFA = (
    <span className="fa-stack">
      <i className="fa fa-star fa-stack-2x"></i>
      <i className="fa fa-user fa-stack-1x fa-inverse"></i>
    </span>
  )
  let signOutFA = (<i className="fa fa-sign-out" aria-hidden="true"></i>)

  let fancyNavLink = (path, text) => {
    let linkHelper;
    return linkHelper = (text == 'Sign out' || text == signOutFA) ?
      <Link id="sign-out-link" onClick={ props.signOut }>{ text }</Link> :
      <Link to={ path } >{ text }</Link>
  }

  return (
    <div className="nav-bar-links">
      <Menu className="columns medium-10 medium-offset-1 hide-for-small-only text-nav-links">
        <MenuItem>{ fancyNavLink('/events', 'Your Events') }</MenuItem>
        <MenuItem>{ fancyNavLink('/vips', 'V.I.P.s') }</MenuItem>
        <MenuItem>{ fancyNavLink(null, 'Sign out') }</MenuItem>
      </Menu>
      <Menu className="columns show-for-small-only small-12 mobile-nav-icons">
        <MenuItem>{ fancyNavLink('/events', eventsFA) }</MenuItem>
        <MenuItem>{ fancyNavLink('/vips', vipFA) }</MenuItem>
        <MenuItem>{ fancyNavLink(null, signOutFA) }</MenuItem>
      </Menu>
    </div>
  )
}

export default NavBarLinks;

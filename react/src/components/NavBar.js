import React from 'react';
import { Link } from 'react-router';
import { Row, Column, Menu, MenuItem } from 'react-foundation';
import { railsAssetImagePath } from './../constants/railsAssetImagePath';
import NavBarLinks from './NavBarLinks';

const NavBar = (props) => {
  let titleTextAndImage, navBarLinks;

  if(props.userLoggedIn) {
    titleTextAndImage =
    (
      <h1 className="man pam">
        Jesse
        <Link to="/">
          <img className="mhs mbs" src={railsAssetImagePath("anchor-white.png")}></img>
        </Link>
        David
      </h1>
    )
    navBarLinks = <NavBarLinks signOut={props.signOut}/>
  } else {
    titleTextAndImage =
    (
      <h1 className="man mbl pbl">
        Jesse
        <Link to="/">
          <img className="mhs mbs" src={railsAssetImagePath("anchor-white.png")}></img>
        </Link>
        David
      </h1>
    )
  }

  return (
    <div className="header-background-style">
      <div className="text-center header-anchor-style">
        { titleTextAndImage }
      </div>
      <div className="show-for-small-only">
        <nav className="top-bar header-background-style" data-topbar role="navigation">
          <ul className="title-area">
            <li className="name">
            </li>
            <li className="toggle-topbar menu-icon"><a href="#"><span></span></a></li>
          </ul>

          <section className="top-bar-section">
            <ul>
              <li>
                <Link to="/events">
                  Your Events
                </Link>
              </li>
              <li>
                <Link to="/vips">
                  V.I.P.s
                </Link>
              </li>
              <li>
                <Link id="sign-out-link" onClick={ props.signOut }>
                  Sign Out
                </Link>
              </li>
            </ul>
          </section>
        </nav>
      </div>
      <div className="hide-for-small-only desktop-top-bar text-center">
        <Column medium={10} offsetOnMedium={1} large={8} offsetOnLarge={2}>
          <Column small={4}>
            <Link className="phl" to="/events">
              Your Events
            </Link>
          </Column>
          <Column small={4}>
            <Link className="phl" to="/vips">
              V.I.P.s
            </Link>
          </Column>
          <Column small={4}>
            <Link className="phl" id="sign-out-link" onClick={ props.signOut }>
              Sign Out
            </Link>
          </Column>
        </Column>
      </div>
    </div>
  )
}

export default NavBar;

    // <div className="top-bar small-nav nav-wrapper">
      // <div className="top-bar-title text-center">
        // { navBarLinks }
      // </div>
    // </div>

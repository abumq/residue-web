import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import NavMenu from '../NavMenu';

import logo from './img/logo.png';
import './style.css';

const Layout = React.createClass({
  propTypes: {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(React.PropTypes.node),
      PropTypes.node,
    ]),
    isLoggedIn: PropTypes.bool,
  },

  getInitialState() {
    return {
      navOpened: false,
    };
  },

  getDefaultProps() {
    return {
      isLoggedIn: true,
    };
  },

  openNav() {
    this.setState({navOpened: true});
  },

  render() {
    return (
      <div className="app-container">
        <header>
          <button className="open-nav-btn" onClick={this.openNav}>☰</button>
          <Link to="/">
              <img src={logo} className="logo" alt="logo" />
          </Link>
        </header>
        <NavMenu isLoggedIn={this.props.isLoggedIn} isOpened={this.state.navOpened} />
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            &copy; 2018 Muflihun Labs
          </p>
          <p>
            <a href="https://muflihun.com/">Muflihun.com</a>
          </p>
        </footer>
      </div>
    );
  }
});

export default Layout;

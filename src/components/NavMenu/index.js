import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

import './style.css';

const NavMenu = React.createClass({
  propTypes: {
    isOpened: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    className: PropTypes.string,
  },

  getInitialState() {
    return {
      isOpened: this.props.isOpened,
    };
  },

  getDefaultProps() {
    return {
      isOpened: false,
      isLoggedIn: true,
    };
  },

  closeNav() {
      this.setState({isOpened: false});
  },

  openNav() {
      this.setState({isOpened: true});
  },

  componentWillReceiveProps(nextProps) {
    this.setState({isOpened: nextProps.isOpened});
  },

  render() {
    return (
      <div className={classnames({'NavMenu': true, 'NavMenu__open': this.state.isOpened }, this.props.className)}>
        <button className="NavMenu__close-nav-btn" onClick={this.closeNav}>✖</button>
        {this.props.isLoggedIn &&
          <div>
            <div className="NavMenu__group">
              <div className="NavMenu__header">
                Clients
              </div>
              <div className="NavMenu__items">
                <Link className="NavMenu__item" to="/clients/">Manage</Link>
              </div>
            </div>
            <div className="NavMenu__group">
              <div className="NavMenu__header">
                Loggers
              </div>
              <div className="NavMenu__items">
                <Link className="NavMenu__item" to="/loggers/">Manage</Link>
                <Link className="NavMenu__item" to="/loggers/create">Create</Link>
              </div>
            </div>
            <div className="NavMenu__group">
              <div className="NavMenu__header">
                Account
              </div>
              <div className="NavMenu__items">
                <Link className="NavMenu__item" to="/signout">Sign Out</Link>
              </div>
            </div>
          </div>
        }
        {!this.props.isLoggedIn &&
          <div>
            <div className="NavMenu__group">
              <div className="NavMenu__header">
                Account
              </div>
              <div className="NavMenu__items">
                <Link className="NavMenu__item" to="/signin">Sign In</Link>
                <Link className="NavMenu__item" to="/signup">Sign Up</Link>
              </div>
            </div>
          </div>
        }
        <div className="NavMenu__group">
          <div className="NavMenu__header">
            Server
          </div>
          <div className="NavMenu__items">
            <Link className="NavMenu__item" to="/server">Details</Link>
            <Link className="NavMenu__item" to="/about">About</Link>
          </div>
        </div>
      </div>
    );
  }
});

export default NavMenu;

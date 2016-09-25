import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <div className="main-content">
        <header>
          <div className="header-title">
            <h2>Ixora</h2>
          </div>
          <ul className="navbar-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/play">Play</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
}

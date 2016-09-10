import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/play">Play</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PlayDropdownMenu extends Component {

  render() {
    return (
      <div className="dropdown">
        <Link to="/about">About</Link>
        <div className="dropdown-content">
          <ul>
            <li><a href="#">hi</a></li>
            <li><a href="#">hello</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

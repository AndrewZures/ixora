import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PlayDropdownMenu extends Component {

  render() {
    return (
      <div className="dropdown">
        <a href='#'>Play</a>
        <div className="dropdown-content">
          <ul>
            <li><Link to="/play/d3/bar_chart">Bar Chart</Link></li>
            <li><Link to="/play/d3/three_circles">Three Circles</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

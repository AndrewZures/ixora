import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Play extends Component {
  render() {
    return (
      <div>
        <div className="navbar-menu">
          <ul>
            <li><Link to="/play/d3/bar_chart">Bar Chart</Link></li>
            <li><Link to="/play/d3/three_circles">Three Circles</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

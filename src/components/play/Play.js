import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Play extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/play/d3/bar_chart">Bar Chart</Link></li>
          <li><Link to="/play/d3/three_circles">Three Circles</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

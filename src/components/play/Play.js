import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Play extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/play/d3">D3</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

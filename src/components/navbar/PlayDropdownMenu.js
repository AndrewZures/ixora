import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PlayDropdownMenu extends Component {

  render() {
    return (
      <div className="dropdown">
        <Link to="/play/d3/bar_chart">Play</Link>
        <div className="dropdown-content">
          <ul>
            <li><Link to="/play/d3/bar_chart">Graphs</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

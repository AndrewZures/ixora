import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import PlayDropdownMenu from 'components/navbar/PlayDropdownMenu';
import AboutDropdownmenu from 'components/navbar/AboutDropdownmenu';

export default class NavBar extends Component {
  render() {
    return (
      <div className="main-content">
        <header>
          <h2>Ixora</h2>
          <ul className="navbar-list">
            <li><AboutDropdownmenu /></li>
            <li><PlayDropdownMenu /></li>
          </ul>
        </header>
      </div>
    );
  }
}

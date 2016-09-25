import React, { Component } from 'react';
import Navbar from 'components/navbar/Navbar';

export default class NavBar extends Component {
  render() {
    return (
      <div className="main-content">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
};

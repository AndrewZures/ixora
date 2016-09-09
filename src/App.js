import React, { Component } from 'react';

// components
import Navbar from './navbar/Navbar';
import MainContent from './mainContent/MainContent';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainContent />
      </div>
    );
  }
}

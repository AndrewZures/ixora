import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <button onClick={this.props.onClick.bind(this)}>
          {this.props.buttonTitle}
        </button>
        <h3>{this.props.counter}</h3>
      </div>
    );
  }
}

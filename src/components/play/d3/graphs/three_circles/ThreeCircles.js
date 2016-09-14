import React, { Component } from 'react';
import d3 from 'd3';

export default class ThreeCircles extends Component {

  componentDidMount() {
    this.renderChart();
  }

  renderChart() {
    let svg = d3.select('svg')

    svg.selectAll('circle')
    .data([32,57,112,144])
      .style('fill', 'steelblue')
    .enter().append('circle')
      .style('fill', 'steelblue')
      .attr('r', (d) => Math.sqrt(d))
      .attr('cx', (d, i) => i * 100 + 30)
      .attr('cy', 60)
  }

  render() {
    return (
      <div id="three-circles">
        <svg width="720" height="120">
          <circle cx="40" cy="60" r="10"></circle>
          <circle cx="80" cy="60" r="10"></circle>
          <circle cx="120" cy="60" r="10"></circle>
        </svg>
      </div>
    );
  }
}

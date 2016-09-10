import React, { Component } from 'react';
import * as d3 from 'd3';

export default class BasicGraph extends Component {

  componentDidMount() {
    this.renderChart();
  }

  shouldComponentUpdate() {
    return false;
  }

  renderChart() {
    let data = [4, 8, 15, 16, 23, 42];

    let x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 800]);

    d3.select('#basic-chart')
    .selectAll("div")
      .data(data)
    .enter().append("div")
      .style("width", d => x(d) + "px")
      .text(d => d);
  }

  render() {
    return (
      <div>
        <h1>BasicGraph</h1>
        <div id="basic-chart" className="chart" />
      </div>
    );
  }
}

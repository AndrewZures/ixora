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
    let width = 420;
    let barHeight = 20;

    let x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

    let chart = d3.select('#basic-chart')
    .attr('width', width)
    .attr('height', barHeight * data.length);

    let bar = chart
    .selectAll('g').data(data)
    .enter().append('g')
    .attr('transform', (d, i) => `translate(0,${i*barHeight})`);

    bar.append('rect')
    .attr('width', x)
    .attr('height', barHeight - 1);

    bar.append('text')
    .attr('x', d => x(d) - 3)
    .attr('y', barHeight / 2)
    .attr('dy', '.35em')
    .text(d => d)
  }

  render() {
    return (
      <div>
        <h1>BasicGraph</h1>
        <svg id="basic-chart" className="chart" />
      </div>
    );
  }
}

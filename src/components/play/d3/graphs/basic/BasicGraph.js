import React, { Component } from 'react';
import * as _ from 'lodash';
import * as d3 from 'd3';

export default class BasicGraph extends Component {

  componentDidMount() {
    this.renderChart(this.props.data);
  }

  shouldComponentUpdate() {
    return false;
  }

  renderChart(data) {
    let margin = { top: 20, right: 30, bottom: 30, left: 40 };
    let width = 960 - margin.left - margin.right;
    let height = 500 - margin.top - margin.bottom;

    let x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

    let xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom');

    let y = d3.scale.linear()
      .range([height, 0]);

    let yAxis = d3.svg.axis()
      .scale(y)
      .orient('left')
      .ticks(10, '%');

    let chart = d3.select('#basic-chart')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    x.domain(_.map(data, 'name'));
    y.domain([0, d3.max(data, d => d.value)]);

    chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);

    chart.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('Frequency');

    chart.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.value))
      .attr('height', d => height - y(d.value))
      .attr('width', x.rangeBand())
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

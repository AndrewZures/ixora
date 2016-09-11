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
    console.log(data);
    let width = 960;
    let height = 500;

    let chart = d3.select('#basic-chart')
    .attr('width', width)
    .attr('height', height);

    let y = d3.scale.linear()
      .domain([0, _.max(_.map(data, 'value'))])
      .range([height, 0]);

    let barWidth = width / data.length;

    let bar = chart.selectAll('g')
      .data(data)
      .enter().append('g')
        .attr('transform', (d,i) => `translate(${i*barWidth}, 0)`)

    bar.append('rect')
      .attr('y', d => y(d.value))
      .attr('height', d => height - y(d.value))
      .attr('width', barWidth - 1)

    bar.append('text')
      .attr('x', barWidth / 2)
      .attr('y', d => y(d.value) + 3)
      .attr('dy', '.75em')
      .text(d => d.label)
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

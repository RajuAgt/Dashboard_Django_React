import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';

export default class Example extends React.Component {
  state = {
    useCanvas: false
  };
  render() {
    const {useCanvas} = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const data = [[{x: 1, y: 8}, {x: 3, y: 5}, {x: 4, y: 15}],
                 [{x: 3, y: 9}, {x: 4, y: 2}],
                 [{x: 2, y: 11}, {x: 3, y: 7}, {x: 4, y: 9}]];
    const labelsData = data.map(value => value.map(tuple => ({x: tuple.x.toString(), y: tuple.y, label: tuple.y.toString()})))

    const bars = data.map((value, index) => <BarSeries data={value} key={index} />)
    const labels = labelsData.map((value, index) => <LabelSeries data={value} key={index} labelAnchorY='hanging' style={{fill: '#ff8c00'}}/>)

    return (
      <div>

        <XYPlot width={250} height={300} stackBy='y'>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />

          <YAxis />
          <BarSeries data={[{x: 2, y: 10}, {x: 4, y: 5}, {x: 5, y: 15}]} color='#2a9d8f'/>
          <BarSeries data={[{x: 2, y: 12}, {x: 4, y: 2}, {x: 5, y: 11}]} color='#f77f00'/>
          <BarSeries data={[{x: 2, y: 12}, {x: 4, y: 2}, {x: 5, y: 11}]} color='#d62828'/>
        </XYPlot>
      </div>
    );
  }
}

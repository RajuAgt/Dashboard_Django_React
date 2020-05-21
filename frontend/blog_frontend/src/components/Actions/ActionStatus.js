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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class Example extends React.Component {
  state = {
    useCanvas: false
  };
  render() {
    const {useCanvas} = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const data = [[{x: 'Wipro', y: 10}, {x: 'Xoserve', y: 5}, {x: 'ECMS', y: 15}],
                 [{x: 'Wipro', y: 12}, {x: 'Xoserve', y: 2}, {x: 'ECMS', y: 11}],
                 [{x: 'Wipro', y: 12}, {x: 'Xoserve', y: 2}, {x: 'ECMS', y: 11}]];
    const labelsData = data.map(value => value.map(tuple => ({x: tuple.x.toString(), y: tuple.y, label: tuple.y.toString()})))

    const bars = data.map((value, index) => <BarSeries data={value} key={index} />)
    const labels = labelsData.map((value, index) => <LabelSeries data={value} key={index} labelAnchorY='hanging' style={{fill: '#ff8c00'}}/>)

    return (
      <div>
      <Table>
          <TableBody>
            <TableRow>

                <TableCell>
                    <XYPlot margin={{bottom: 70}} width={240} height={280} stackBy='y' xType="ordinal">
                      <VerticalGridLines />
                      <HorizontalGridLines />
                      <XAxis tickLabelAngle={-60}/>

                      <YAxis />
                      <BarSeries data={[{x: 'Wipro', y: 10, label:10}, {x: 'Xoserve', y: 5, label:5}, {x: 'ECMS', y: 15, label:15}]} color='#2a9d8f' barWidth='0.5'/>
                      <BarSeries data={[{x: 'Wipro', y: 12, label:12}, {x: 'Xoserve', y: 2, label:2}, {x: 'ECMS', y: 11, label:11}]} color='#f77f00' barWidth='0.5'/>
                      <BarSeries data={[{x: 'Wipro', y: 12, label:12}, {x: 'Xoserve', y: 2, label:2}, {x: 'ECMS', y: 11, label:11}]} color='#d62828' barWidth='0.5'/>
                      <LabelSeries data={[{x: 'Wipro', y: 10, label:10}, {x: 'Xoserve', y: 5, label:5}, {x: 'ECMS', y: 15, label:15}]} labelAnchorY='hanging' style={{fill: '#000000'}}/>
                      <LabelSeries data={[{x: 'Wipro', y: 12, label:12}, {x: 'Xoserve', y: 2, label:2}, {x: 'ECMS', y: 11, label:11}]} labelAnchorY='hanging' style={{fill: '#000000'}}/>
                      <LabelSeries data={[{x: 'Wipro', y: 12, label:12}, {x: 'Xoserve', y: 2, label:2}, {x: 'ECMS', y: 11, label:11}]} labelAnchorY='hanging' style={{fill: '#000000'}}/>
                    </XYPlot>

              </TableCell>
          </TableRow>
          <TableRow>
              <TableCell align='center'>Issues</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
    );
  }
}

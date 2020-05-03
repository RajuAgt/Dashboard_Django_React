import React, {Component} from 'react';

import {RadialChart, Hint} from 'react-vis';

import { render } from "react-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default class SimpleRadialChart extends Component {
  state = {
    value: false
  };
  render() {
    const {value} = this.state;
    return (
      <div>
      <Table>
          <TableBody>
            <TableRow>
                <TableCell>
                    <RadialChart colorType={'literal'} colorDomain={[0, 100]} colorRange={[0, 10]} margin={{top: 100}}
                    getLabel={d => d.name}
                    data={[
                      {angle: 8, color: '#3b7a57', name: '8'},
                      {angle: 2, color: '#FFBF00', name: '3'},
                      {angle: 0, color: '#cd5c5c', name: '1'},
                    ]}
                    labelsRadiusMultiplier={1.1}
                    labelsStyle={{fontSize: 16, fill: '#222'}}
                    showLabels
                    style={{stroke: '#fff', strokeWidth: 2}} width={240}
                    height={180}
                    />
                </TableCell>
                <TableCell>
                    <RadialChart colorType={'literal'} colorDomain={[0, 100]} colorRange={[0, 10]} margin={{top: 100}}
                    getLabel={d => d.name}
                    data={[
                      {angle: 8, color: '#3b7a57', name: '8'},
                      {angle: 2, color: '#FFBF00', name: '3'},
                      {angle: 1, color: '#cd5c5c', name: '1'},
                    ]}
                    labelsRadiusMultiplier={1.1}
                    labelsStyle={{fontSize: 16, fill: '#222'}}
                    showLabels
                    style={{stroke: '#fff', strokeWidth: 2}} width={240}
                    height={180}
                    />
                </TableCell>
                <TableCell>
                    <RadialChart colorType={'literal'} colorDomain={[0, 100]} colorRange={[0, 10]} margin={{top: 100}}
                    getLabel={d => d.name}
                    data={[
                      {angle: 8, color: '#3b7a57', name: '8'},
                      {angle: 3, color: '#FFBF00', name: '3'},
                      {angle: 5, color: '#cd5c5c', name: '1'},
                    ]}
                    labelsRadiusMultiplier={1.1}
                    labelsStyle={{fontSize: 16, fill: '#222'}}
                    showLabels
                    style={{stroke: '#fff', strokeWidth: 2}} width={240}
                    height={180}
                    />
                </TableCell>
                <TableCell>
                    <RadialChart colorType={'literal'} colorDomain={[0, 100]} colorRange={[0, 10]} margin={{top: 100}}
                    getLabel={d => d.name}
                    data={[
                      {angle: 8, color: '#3b7a57', name: '8'},
                      {angle: 10, color: '#FFBF00', name: '3'},
                      {angle: 1, color: '#cd5c5c', name: '1'},
                    ]}
                    labelsRadiusMultiplier={1.1}
                    labelsStyle={{fontSize: 16, fill: '#222'}}
                    showLabels
                    style={{stroke: '#fff', strokeWidth: 2}} width={240}
                    height={180}
                    />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='center'>Deliverable</TableCell>
                <TableCell align='center'>Risks</TableCell>
                <TableCell align='center'>Actions</TableCell>
                <TableCell align='center'>Issues</TableCell>
            </TableRow>
          </TableBody>
      </Table>
    </div>
    );
  }
}

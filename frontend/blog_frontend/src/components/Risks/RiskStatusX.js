import React, {Component} from 'react';

import {RadialChart} from 'react-vis';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class RiskStatusX extends Component {
  
  render() {

    return (
      <div>

      <Table>

          <TableBody>
            <TableRow>

                <TableCell>
                    <RadialChart colorType={'literal'} colorDomain={[0, 100]} colorRange={[0, 10]} margin={{top: 100}}
                    getLabel={d => d.name}
                    data={this.props.risksList}
                    labelsRadiusMultiplier={1.1}
                    labelsStyle={{fontSize: 16, fill: '#222'}}
                    showLabels
                    style={{stroke: '#fff', strokeWidth: 2}}
                    width={240} height={180}
                    />
                </TableCell>
            </TableRow>
            <TableRow>

                <TableCell align='center'>Risks</TableCell>
            </TableRow>
          </TableBody>
      </Table>
    </div>
    );
  }
}

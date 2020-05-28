import React, {Component} from 'react';

import {RadialChart, Hint} from 'react-vis';

import { render } from "react-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Typography from '@material-ui/core/Typography';

function outageEventStyleFunc(d) {
    let color = null;
      if(d.get("impact") === "High"){
          color = "#d62828";
      }else if(d.get("impact") === "Medium"){
          color = "#f77f00";
      }else{
          color = "#2a9d8f";
      }
}


export default class IssueStatusX extends Component {
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
                    data={this.props.issuesList}
                    labelsRadiusMultiplier={1.1}
                    labelsStyle={{fontSize: 16, fill: '#222'}}
                    showLabels
                    style={{stroke: '#fff', strokeWidth: 2}}
                    width={240} height={180}
                    />
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

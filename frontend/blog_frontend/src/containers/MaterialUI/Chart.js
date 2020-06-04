import React, {Component} from 'react';
import { useTheme } from '@material-ui/core/styles';
import cssClass from "./Chart.css";
import Title from './Title';
import Outages from "./../PostProjects/outages"
import ProjectStatus from '../../components/Projects/ProjectStatus';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default class Chart extends Component {
  state = {
    value: false
  };

  render(){
    const {value} = this.state;
    return (
      <Table className={cssClass.root}>
          <TableRow className={cssClass.details}>
            <TableCell className={cssClass.columnBody}>
                <Title style={{color:'#1D3557'}}>Gemini Portfolio Timeline</Title>
            </TableCell>
            <TableCell className={cssClass.rowC}>
              <ProjectStatus />
            </TableCell>
          </TableRow>

          <Outages/>
      </Table>
    );
  }

}

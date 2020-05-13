import React from "react";

import Phase from "./Phase/Phase";
import Auz from "../../hoc/Auz/Auz";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#1a535c',
    color: theme.palette.common.white,
    fontFamily: 'Open Sans',
  },
  body: {
    fontSize: 14,
    fontFamily: 'Open Sans',
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f5fff5',
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    width: '80%',
    margin: '25px auto',
  },
});


const phases = props => {
  const classes = useStyles();

    return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Project Phase</StyledTableCell>
          <StyledTableCell>RAG Status</StyledTableCell>
          <StyledTableCell>Phase Start Date</StyledTableCell>
          <StyledTableCell>Revised Start Date</StyledTableCell>
          <StyledTableCell>Phase End Date</StyledTableCell>
          <StyledTableCell>Revised End Date</StyledTableCell>
          <StyledTableCell>Duration</StyledTableCell>
          <StyledTableCell>Current Progress</StyledTableCell>
        </TableRow>
      </TableHead>
        <TableBody>
          {props.phasesList.map(phase => (
            <StyledTableRow key={phase.projectPhase}>
              <StyledTableCell component="th" scope="row">
                {phase.projectPhase}
              </StyledTableCell>
              <TableCell style={phase.statusRAG==='Green'?{backgroundColor:'#2a9d8f'}:
              phase.statusRAG==='Amber'?{backgroundColor:'#f77f00'}:{backgroundColor:'#d62828'}}>
              {phase.statusRAG}</TableCell>
              <StyledTableCell>{new Date(phase.startDate).toLocaleDateString()}</StyledTableCell>
              <StyledTableCell>{new Date(phase.endDate).toLocaleDateString()}</StyledTableCell>
              <StyledTableCell>{new Date(phase.startDateRev).toLocaleDateString()}</StyledTableCell>
              <StyledTableCell>{new Date(phase.endDateRev).toLocaleDateString()}</StyledTableCell>
              <StyledTableCell>{phase.duration}</StyledTableCell>
              <StyledTableCell>{phase.comments}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default phases;

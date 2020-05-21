import React from "react";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import LineChart from './LineChart';

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
    width: '100%',
    margin: '25px auto',
  },
});


const developments = props => {

  const classes = useStyles();

    return (
    <TableContainer>
    <LineChart /><hr/>
      <Table className={classes.table} aria-label="customized table" id="table-to-xls">

        <TableHead>
          <TableRow>
          <StyledTableCell>RAG</StyledTableCell>
          <StyledTableCell>To DO</StyledTableCell>
          <StyledTableCell>Coding</StyledTableCell>
          <StyledTableCell>Code Review</StyledTableCell>
          <StyledTableCell>Deployment</StyledTableCell>
          <StyledTableCell>Unit Testing</StyledTableCell>
          <StyledTableCell>Peer Testing</StyledTableCell>
          <StyledTableCell>Planned Completion</StyledTableCell>
          <StyledTableCell>Actual Completion</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.developmentsList.map(development => (
            <StyledTableRow key={development.brg}>
              <StyledTableCell component="th" scope="row">
                {development.brg}
              </StyledTableCell>
              <StyledTableCell>{development.toDO}</StyledTableCell>
              <StyledTableCell>{development.coding}</StyledTableCell>
              <StyledTableCell>{development.codeReview}</StyledTableCell>
              <StyledTableCell>{development.deployment}</StyledTableCell>
              <StyledTableCell>{development.unitTesting}</StyledTableCell>
              <StyledTableCell>{development.peerTesting}</StyledTableCell>
              <StyledTableCell>{development.planPercent}</StyledTableCell>
              <StyledTableCell>{development.actualPercent}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>
  );
};

export default developments;

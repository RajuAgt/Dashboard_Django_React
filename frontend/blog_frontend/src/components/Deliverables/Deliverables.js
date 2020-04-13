import React from "react";

import Deliverable from "./Deliverable/Deliverable";
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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    width: '70%',
    margin: '25px auto',
  },
});

const deliverables = props => {
  const classes = useStyles();
    return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Deliverable</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.deliverablesList.map(deliverable => (
            <StyledTableRow key={deliverable.deliverableName}>
              <StyledTableCell component="th" scope="row">
                {deliverable.deliverableName}
              </StyledTableCell>
              <StyledTableCell>{deliverable.deliverableBody}</StyledTableCell>
              <StyledTableCell>{new Date(deliverable.published_on).toDateString()}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default deliverables;
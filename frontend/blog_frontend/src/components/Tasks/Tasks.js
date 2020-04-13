import React from "react";

import Task from "./Task/Task";
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

const tasks = props => {
  const classes = useStyles();
    return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Project Phase</StyledTableCell>
            <StyledTableCell>Key Highlights</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tasksList.map(task => (
            <StyledTableRow key={task.taskName}>
              <StyledTableCell component="th" scope="row">
                {task.taskName}
              </StyledTableCell>
              <StyledTableCell>{task.taskBody}</StyledTableCell>
              <StyledTableCell>{new Date(task.published_on).toDateString()}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
};

export default tasks;

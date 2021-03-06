import React from "react";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

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

function styleFunc(deliverable) {
    let color = null;
    if(deliverable.get("statusRAG") === "Green"){
        color = "	#00FF00";
    } else if(deliverable.get("statusRAG") === "Amber"){
        color = "#FFBF00";
    }else if(deliverable.get("statusRAG") === "Red"){
        color = "#FF0000";
    }
}


const deliverables = props => {

  const classes = useStyles();

    return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table" id="table-to-xls">

        <TableHead>
          <TableRow>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Deliverable</StyledTableCell>
            <StyledTableCell>Planned Date</StyledTableCell>
            <StyledTableCell>Revised Date</StyledTableCell>
            <StyledTableCell>Delivered Date</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>RAG</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.deliverablesList.map(deliverable => (
            <StyledTableRow key={deliverable.deliverableName}>
              <StyledTableCell component="th" scope="row">
                {deliverable.deliverableName}
              </StyledTableCell>
              <StyledTableCell>{deliverable.deliverableBody}</StyledTableCell>
              <StyledTableCell>{new Date(deliverable.planDate).toDateString()}</StyledTableCell>
              <StyledTableCell>{new Date(deliverable.reviseDate).toDateString()}</StyledTableCell>
              <StyledTableCell>{new Date(deliverable.deliveredDate).toDateString()}</StyledTableCell>
              <StyledTableCell>{deliverable.comments}</StyledTableCell>
              <TableCell style={deliverable.statusRAG==='Green'?{backgroundColor:'#2a9d8f'}:
              deliverable.statusRAG==='Amber'?{backgroundColor:'#f77f00'}:{backgroundColor:'#d62828'}}>
              {deliverable.statusRAG}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default deliverables;

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';


import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  projectList: {
    flex: 1,
    fontFamily: 'Open Sans',
    color: '#457B9D'
  },
  projectTitle: {
    fontFamily: 'Open Sans',
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Table><TableRow><TableCell>
      <Title className={classes.projectList}>Gemini Projects</Title>
      </TableCell></TableRow></Table>
      <Typography className={classes.projectList}>
        DC Exit Support<br/>
        NTS Optional Charge
      </Typography>
      <div>
        <Link className={classes.projectList} href="/projects" >
          View all Projects
        </Link>
      </div>
    </React.Fragment>
  );
}

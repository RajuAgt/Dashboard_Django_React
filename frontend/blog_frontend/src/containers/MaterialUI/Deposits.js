import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Gemini Projects</Title>
      <Typography color="#457B9D" className={classes.depositContext}>
        DC Exit Support<br/>
        NTS Optional Charge
      </Typography>
      <div>
        <Link color="#457B9D" href="/projects" >
          View all Projects
        </Link>
      </div>
    </React.Fragment>
  );
}

import React from "react";

import Auz from "../../hoc/Auz/Auz";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    width: '100%',
    margin: '2px auto',
  },
});

const highlights = props => {
  const classes = useStyles();

    return (
        <div>
        Key lookouts
          <ul>Highlight 1</ul>
          <ul>Highlight 2</ul>
          <ul>Highlight 3</ul>
        </div>
  );
};

export default highlights;

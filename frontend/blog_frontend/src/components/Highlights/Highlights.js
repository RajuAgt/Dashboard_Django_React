import React from "react";

import { makeStyles } from '@material-ui/core/styles';

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

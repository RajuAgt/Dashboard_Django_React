import React from "react";

import cssClass from "./Projects.css";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Link from '@material-ui/core/Link';


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

const projectsNames = props => {

    const classes = useStyles();

    return (
      <React.Fragment>
        <Title className={classes.projectList}>Gemini Projects</Title>

      {props.projectList.map(project => (
        <Typography className={classes.projectList}>{project.projectTitle}</Typography>

      ))}

      <div>
        <Link className={classes.projectList} href="/projects" >
          View all Projects
        </Link>
      </div>
    </React.Fragment>
    );
};

export default projectsNames;

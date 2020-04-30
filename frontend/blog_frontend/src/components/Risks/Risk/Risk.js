import React from "react";

import cssClass from "./Risk.css";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '25px auto',
    padding: 0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  columnBody: {
    flexBasis: '66.66%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));


const risk = props => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
      <div>
      <div className={classes.root}>
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{props.riskName}</Typography>
          </div>
          <div className={classes.column}>

          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{props.owner}</Typography>
          </div>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.columnBody}>
              <b>Risk:</b> {props.riskBody}
              <br/><br/>
              <b>Mitigation:</b> {props.mitigation}
          </div>

          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Impact:
              {props.impact}
            </Typography><br/>
            <Typography variant="caption">
              probability:
              {props.probability}
            </Typography><br/>
            <Typography variant="caption">
              Phase Detected:
              {props.phaseDetected}
            </Typography><br/>
            <Typography variant="caption">
              Target Date:
              {new Date(props.impactDate).toDateString()}
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />

      </ExpansionPanel>
    </div>
      </div>
    );
};

export default risk;

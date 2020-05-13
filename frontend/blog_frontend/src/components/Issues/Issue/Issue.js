import React from "react";

import cssClass from "./Issue.css";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '25px auto',
    padding: 0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    flexBasis: '66.66%',
    flexShrink: 0,
    fontFamily: 'Open Sans',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    fontFamily: 'Open Sans',
  },
}));

const issue = props => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
      <div>
      <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{props.issueName}</Typography>
          <Typography className={classes.secondaryHeading}>{new Date(props.publishedOn).toDateString()}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{fontFamily: 'Open Sans'}}>
            {props.issueBody}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
    </div>
    );
};

export default issue;

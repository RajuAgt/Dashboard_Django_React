import React from "react";
import cssClass from "./Phases.css";

import { render } from "react-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Example(props) {
  return (
    <div style={{ marginBottom: 20 }}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingBottom: 30 }}>{props.children}</div>
        <div style={{ width: "20%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
const percentage = 100;
const percentage1 = 80;
const percentage2= 60;
const percentage3 = 30;
class ProjectPhase extends React.Component {




  render() {
    return (
      <div className={cssClass.ProjectBodyDiv}>

      <Table size="small">

        <TableBody>
            <TableRow key='graph'>
              <TableCell>
                <CircularProgressbar
                 value={percentage}
                 text={`${percentage}%`}
                 styles={buildStyles({
                   textColor: "green",
                   pathColor: "green",
                   trailColor: "gray"
                  })} />
              </TableCell>
              <TableCell>
                <CircularProgressbar
                 value={percentage1}
                 text={`${percentage1}%`}
                 styles={buildStyles({
                   textColor: "green",
                   pathColor: "green",
                   trailColor: "gray"
                  })} />
              </TableCell>
              <TableCell>
                <CircularProgressbar
                 value={percentage2}
                 text={`${percentage2}%`}
                 styles={buildStyles({
                   textColor: "green",
                   pathColor: "green",
                   trailColor: "gray"
                  })} />
              </TableCell>
              <TableCell>
                <CircularProgressbar
                 value={percentage3}
                 text={`${percentage3}%`}
                 styles={buildStyles({
                   textColor: "green",
                   pathColor: "green",
                   trailColor: "gray"
                  })} />
              </TableCell>
            </TableRow>

              <TableRow>
                <TableCell align = 'center' size="small">Analysis</TableCell>
                <TableCell align = 'center' size="small">Coding  </TableCell>
                <TableCell align = 'center' size="small">Testing </TableCell>
                <TableCell align = 'center' size="small">User Test</TableCell>
              </TableRow>
        </TableBody>
      </Table>


      </div>
    );
  }
}
export default ProjectPhase;

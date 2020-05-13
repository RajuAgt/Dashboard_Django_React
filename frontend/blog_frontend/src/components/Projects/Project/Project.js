import React from "react";
import { Link } from "react-router-dom";

import cssClass from "./Project.css";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    fontFamily: 'Open Sans',
  },
}))(TableCell);

const project = props => {
    const articleClass = [
        cssClass.center,
        cssClass.mw5,
        cssClass.mw6Ns,
        cssClass.br3,
        cssClass.hidden,
        cssClass.ba,
        cssClass.bBlack10,
        cssClass.mv4,

    ];

    const h1Class = [
        cssClass.f4,
        cssClass.bgNearWhite,
        cssClass.br3,
        cssClass.brTop,
        cssClass.Black60,
        cssClass.mv0,
        cssClass.pv2,
        cssClass.ph3,
        cssClass.title
    ];

    const articleDivClass = [cssClass.pa3, cssClass.bt, cssClass.bBlack10];

    const articlePClass = [
        cssClass.f6,
        cssClass.f5Ns,
        cssClass.lhCopy,
        cssClass.measure
    ];

    return (
        <article className={articleClass.join(" ")}>
            <Link
                style={{ textDecoration: "none" }}
                to={"projects/view/" + props.slug}
            >
                <h1 className={h1Class.join(" ")}>{props.title}</h1>
            </Link>
            <div className={articleDivClass.join(" ")}>
                <p className={articlePClass.join(" ")}>
                    {props.short_description}
                </p>
                <Link to={"projects/view/" + props.slug}>
                    <div className={cssClass.ReadFullPost}>
                        <Button variant="outlined" color="primary">
                          View Report
                        </Button>
                    </div>
                </Link>
                <br />
                <div className={cssClass.ProjectInfo}>
                    <Table size='small' width='150'>
                    <TableBody>
                      <TableRow>
                        <StyledTableCell size='small' fontFamily="Open Sans">Xoserve PM</StyledTableCell>
                        <StyledTableCell>: {props.clientManager}</StyledTableCell>
                      </TableRow>

                      <TableRow>
                        <StyledTableCell width='120'>Wipro PM</StyledTableCell>
                        <StyledTableCell>: {props.author}</StyledTableCell>
                      </TableRow>

                      <TableRow>
                        <StyledTableCell size='small'>Last updated On</StyledTableCell>
                        <StyledTableCell>:{" "}
                        {new Date(props.last_edited).toDateString()}</StyledTableCell>
                      </TableRow>
                    </TableBody>
                    </Table>
                </div>
            </div>
        </article>
    );
};

export default project;

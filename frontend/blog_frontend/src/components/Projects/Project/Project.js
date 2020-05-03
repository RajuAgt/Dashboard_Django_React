import React from "react";
import { Link } from "react-router-dom";

import cssClass from "./Project.css";
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

const project = props => {
    const articleClass = [
        cssClass.center,
        cssClass.mw5,
        cssClass.mw6Ns,
        cssClass.br3,
        cssClass.hidden,
        cssClass.ba,
        cssClass.bBlack10,
        cssClass.mv4
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
                      <TableRow>
                        <TableCell width='120'>Wipro PM</TableCell>
                        <TableCell>: {props.author}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell size='small'>Xoserve PM</TableCell>
                        <TableCell>: {props.clientManager}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell size='small'>Last updated On</TableCell>
                        <TableCell>:{" "}
                        {new Date(props.last_edited).toDateString()}</TableCell>
                      </TableRow>
                    </Table>
                </div>
            </div>
        </article>
    );
};

export default project;

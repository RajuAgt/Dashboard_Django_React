import React from "react";
import { Link } from "react-router-dom";

import Button from "../../UI/Button/Button";
import cssClass from "./Project.css";

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
                        <Button>Open Project</Button>
                    </div>
                </Link>
                <br />
                <div className={cssClass.ProjectInfo}>
                    Manager: {props.author}
                    <br />
                    Last updated On:{" "}
                    {new Date(props.datePublished).toDateString()}
                    <br />
                    {props.totalTasks}{" "}
                    {props.totalTasks == 1 ? "Task" : "Tasks"}
                </div>
            </div>
        </article>
    );
};

export default project;

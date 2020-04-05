import React from "react";

import cssClass from "./Task.css";

const task = props => {
    return (
        <div className={cssClass.Task}>
            <div className={cssClass.Detail}>
                <strong>Name:</strong> {props.taskName}
            </div>
            <div className={cssClass.Body}>
                <strong>Sub Task:</strong> {props.taskBody}
            </div>
            <div className={cssClass.Detail}>
                <strong>On:</strong>{" "}
                {new Date(props.publishedOn).toDateString()}
            </div>
        </div>
    );
};

export default task;

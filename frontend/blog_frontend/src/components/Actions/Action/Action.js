import React from "react";

import cssClass from "./Action.css";

const action = props => {
    return (
        <div className={cssClass.Action}>
            <div className={cssClass.Detail}>
                <strong>Name:</strong> {props.actionName}
            </div>
            <div className={cssClass.Body}>
                <strong>Sub Action:</strong> {props.actionBody}
            </div>
            <div className={cssClass.Detail}>
                <strong>On:</strong>{" "}
                {new Date(props.publishedOn).toDateString()}
            </div>
        </div>
    );
};

export default action;

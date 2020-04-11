import React from "react";

import cssClass from "./Risk.css";

const risk = props => {
    return (
        <div className={cssClass.Risk}>
            <div className={cssClass.Detail}>
                <strong>Name:</strong> {props.riskName}
            </div>
            <div className={cssClass.Body}>
                <strong>Sub Risk:</strong> {props.riskBody}
            </div>
            <div className={cssClass.Detail}>
                <strong>On:</strong>{" "}
                {new Date(props.publishedOn).toDateString()}
            </div>
        </div>
    );
};

export default risk;

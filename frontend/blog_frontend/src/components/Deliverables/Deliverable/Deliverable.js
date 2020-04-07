import React from "react";

import cssClass from "./Deliverable.css";

const deliverable = props => {
    return (
        <div className={cssClass.Deliverable}>
            <div className={cssClass.Detail}>
                <strong>Name:</strong> {props.deliverableName}
            </div>
            <div className={cssClass.Body}>
                <strong>Details:</strong> {props.deliverableBody}
            </div>
            <div className={cssClass.Detail}>
                <strong>On:</strong>{" "}
                {new Date(props.publishedOn).toDateString()}
            </div>
        </div>
    );
};

export default deliverable;

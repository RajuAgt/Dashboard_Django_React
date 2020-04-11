import React from "react";

import cssClass from "./Issue.css";

const issue = props => {
    return (
        <div className={cssClass.Issue}>
            <div className={cssClass.Detail}>
                <strong>Name:</strong> {props.issueName}
            </div>
            <div className={cssClass.Body}>
                <strong>Sub Issue:</strong> {props.issueBody}
            </div>
            <div className={cssClass.Detail}>
                <strong>On:</strong>{" "}
                {new Date(props.publishedOn).toDateString()}
            </div>
        </div>
    );
};

export default issue;

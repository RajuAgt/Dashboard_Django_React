import React from "react";

import Issue from "./Issue/Issue";
import Auz from "../../hoc/Auz/Auz";

const issues = props => {
    return props.issuesList.map(issue => (
        <Auz key={issue.published_on}>
            <Issue
                issueName={issue.issueName}
                issueBody={issue.issueBody}
                publishedOn={issue.published_on}
            />
        </Auz>
    ));
};

export default issues;

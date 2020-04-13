import React from "react";

import Action from "./Action/Action";
import Auz from "../../hoc/Auz/Auz";

const actions = props => {
    return props.actionsList.map(action => (
        <Auz key={action.published_on}>
            <Action
                actionName={action.actionName}
                actionBody={action.actionBody}
                publishedOn={action.published_on}
                actionStatus={action.actionStatus}
                assignedTo={action.assignedTo}
            />
        </Auz>
    ));
};

export default actions;

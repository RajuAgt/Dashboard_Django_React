import React from "react";

import Task from "./Task/Task";
import Aux from "../../hoc/Aux/Aux";

const tasks = props => {
    return props.tasksList.map(task => (
        <Aux key={task.published_on}>
            <Task
                taskName={task.taskName}
                taskBody={task.taskBody}
                publishedOn={task.published_on}
            />
        </Aux>
    ));
};

export default tasks;

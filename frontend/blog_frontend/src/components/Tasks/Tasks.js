import React from "react";

import Task from "./Task/Task";
import Auz from "../../hoc/Auz/Auz";

const tasks = props => {
    return props.tasksList.map(task => (
        <Auz key={task.published_on}>
            <Task
                taskName={task.taskName}
                taskBody={task.taskBody}
                publishedOn={task.published_on}
            />
        </Auz>
    ));
};

export default tasks;

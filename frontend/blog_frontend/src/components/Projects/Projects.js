import React from "react";

import Project from "./Project/Project";
import cssClass from "./Projects.css";

const projects = props => {
    let projectList = null
    if (props.projectList.length > 0) {
        projectList = props.projectList.map(project => (
            <Project
                key={project.slug}
                slug={project.slug}
                title={project.projectTitle}
                datePublished={project.published_on}
                totalComments={project.total_tasks}
                author={project.author_full_name}
                short_description={project.projectName}
                last_edited = {project.last_edited}
            />
        ));
    } else {
        projectList = (
            <div className={cssClass.NoProjects}>No Projects Yet</div>
        )
    }
    return <div>{projectList}</div>;
};

export default projects;

import React, { Component } from "react";

import AxiosInstance from "../../AxiosInstance";
import Spinner from "../../components/UI/Spinner/Spinner";
import cssClass from "./ProjectBody.css";
import HR from "../../components/UI/HR/HR";
import Aux from "../../hoc/Aux/Aux";
import Tasks from "../../components/Tasks/Tasks";
import TaskForm from "../CreateTask/CreateTask";
import ProjectPhase from "../ProjectPhase/ProjectPhase";

class ProjectBody extends Component {
    state = {
        loading: true,
        projectBody: null,
        tasks: null
    };

    getProjectBody = () => {
        AxiosInstance.get("projects/view/" + this.props.match.params.slug)
            .then(response =>
                this.setState({ loading: false, projectBody: response.data })
            )
            .catch(err => console.log("Error From ProjectBody.js", err));
    };

    getTasksList = () => {
        AxiosInstance.get("tasks/" + this.props.match.params.slug + "/")
            .then(response => {
                this.setState({ tasks: response.data });
            })
            .catch(error => {
                alert("Error Loading Tasks. Try Again..!!");
            });
    };

    renderWholePage = () => {
        this.getProjectBody();
        this.getTasksList();
    };
    componentDidMount() {
        this.renderWholePage();
    }

    render() {
        let projectBody = <Spinner />;
        if (!this.state.loading && this.state.projectBody) {
            projectBody = (
                <Aux>
                    <div className={cssClass.ProjectBodyDiv}>
                        <h1 className={cssClass.Title}>
                            {this.state.projectBody.projectTitle}
                        </h1>
                        <p className={cssClass.PublishedDate}>
                            {new Date(
                                this.state.projectBody.published_on
                            ).toDateString()}
                        </p>
                        <HR />
                        <p className={cssClass.ProjectBody}>
                            {this.state.projectBody.projectName}
                        </p>
                        <HR />
                        <ProjectPhase />
                        <HR />
                        <div className={cssClass.ProjectInfo}>
                            <p> - {this.state.projectBody.author_full_name}</p>
                        </div>
                        <h1 className={cssClass.TaskHeading}>
                            Tasks: {this.state.projectBody.total_tasks}
                        </h1>
                    </div>

                    <Tasks tasksList={this.state.tasks} />
                    <TaskForm
                        slug={this.props.match.params.slug}
                        refresh={this.renderWholePage}
                    />
                </Aux>
            );
        }

        return projectBody;
    }
}

export default ProjectBody;

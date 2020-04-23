import React, { Component } from "react";

import AxiosInstance from "../../AxiosInstance";
import Spinner from "../../components/UI/Spinner/Spinner";
import cssClass from "./ProjectBody.css";
import HR from "../../components/UI/HR/HR";
import Auz from "../../hoc/Auz/Auz";
import Tasks from "../../components/Tasks/Tasks";
import TaskForm from "../CreateTask/CreateTask";
import Deliverables from "../../components/Deliverables/Deliverables";
import DeliverableForm from "../CreateDeliverable/CreateDeliverable";
import Risks from "../../components/Risks/Risks";
import RiskForm from "../CreateRisk/CreateRisk";
import Actions from "../../components/Actions/Actions";
import ActionForm from "../CreateAction/CreateAction";
import Issues from "../../components/Issues/Issues";
import IssueForm from "../CreateIssue/CreateIssue";
import ProjectPhase from "../ProjectPhase/ProjectPhase";

class ProjectBody extends Component {
    state = {
        loading: true,
        projectBody: null,
        tasks: null,
        deliverables: null,
        risks: null,
        action: null,
        issue: null
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

    getDeliverablesList = () => {
        AxiosInstance.get("deliverables/" + this.props.match.params.slug + "/")
            .then(response => {
                this.setState({ deliverables: response.data });
            })
            .catch(error => {
                alert("Error Loading Deliverables. Try Again..!!");
            });
    };

    getRisksList = () => {
        AxiosInstance.get("risks/" + this.props.match.params.slug + "/")
            .then(response => {
                this.setState({ risks: response.data });
            })
            .catch(error => {
                alert("Error Loading Risks. Try Again..!!");
            });
    };

    getActionsList = () => {
        AxiosInstance.get("actions/" + this.props.match.params.slug + "/")
            .then(response => {
                this.setState({ actions: response.data });
            })
            .catch(error => {
                alert("Error Loading Actions. Try Again..!!");
            });
    };

    getIssuesList = () => {
        AxiosInstance.get("issues/" + this.props.match.params.slug + "/")
            .then(response => {
                this.setState({ issues: response.data });
            })
            .catch(error => {
                alert("Error Loading Issues. Try Again..!!");
            });
    };


    renderWholePage = () => {
        this.getProjectBody();
        this.getTasksList();
        this.getDeliverablesList();
        this.getRisksList();
        this.getActionsList();
        this.getIssuesList();
    };
    componentDidMount() {
        this.renderWholePage();
    }

    render() {
        let projectBody = <Spinner />;
        if (!this.state.loading && this.state.projectBody) {
            projectBody = (
                <Auz>
                    <div className={cssClass.ProjectBodyDiv}>
                        <h1 className={cssClass.Title}>
                            {this.state.projectBody.projectTitle}
                        </h1>
                        <p className={cssClass.PublishedDate}>
                            {new Date(
                                this.state.projectBody.last_edited
                            ).toDateString()}
                        </p>
                        <HR />
                        <p className={cssClass.ProjectBody}>
                            {this.state.projectBody.projectName}
                        </p>
                        <HR />
                        <ProjectPhase />
                        <HR />

                        <h1 className={cssClass.TaskHeading}>
                            Key Highlights: {this.state.projectBody.total_tasks}
                        </h1>
                    </div>

                    <Tasks tasksList={this.state.tasks} />
                    <div className={cssClass.ProjectBodyDivN}>
                        <h1 className={cssClass.TaskHeading}>
                            Deliverables:
                        </h1>
                    </div>

                    <Deliverables deliverablesList={this.state.deliverables} />

                    <div className={cssClass.ProjectBodyDivN}>
                        <h1 className={cssClass.TaskHeading}>
                            Risks:
                        </h1>
                    </div>

                    <Risks risksList={this.state.risks} />

                  
                    <div className={cssClass.ProjectBodyDivN}>
                        <h1 className={cssClass.TaskHeading}>
                            Issues:
                        </h1>
                    </div>

                    <Issues issuesList={this.state.issues} />

                </Auz>
            );
        }

        return projectBody;
    }
}

export default ProjectBody;

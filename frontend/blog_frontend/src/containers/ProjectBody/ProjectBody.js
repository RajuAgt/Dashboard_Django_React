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
import Phases from "../../components/Phases/Phases";
import Phases0 from "../../components/Phases/Phases0";
import Copyright from '../../components/UI/Footer/Copyright';
import Milestone from "../../components/Milestone/Milestone";
import Developments from "../../components/Developments/Developments";

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function myFunction() {
  window.print();
};

class ProjectBody extends Component {
    state = {
        loading: true,
        projectBody: null,
        tasks: null,
        deliverables: null,
        risks: null,
        actions: null,
        issues: null,
        phases: null,
        developments: null
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

    getPhasesList = () => {
        AxiosInstance.get("phases/" + this.props.match.params.slug + "/")
            .then(response => {
                this.setState({ phases: response.data });
            })
            .catch(error => {
                alert("Error Loading Phases. Try Again..!!");
            });
    };

    getDevelopmentsList = () => {
        AxiosInstance.get("developments/" + this.props.match.params.slug + "/")
            .then(response => {
                this.setState({ developments: response.data });
            })
            .catch(error => {
                alert("Error Loading Developments. Try Again..!!");
            });
    };


    renderWholePage = () => {
        this.getProjectBody();
        this.getTasksList();
        this.getDeliverablesList();
        this.getRisksList();
        this.getActionsList();
        this.getIssuesList();
        this.getPhasesList();
        this.getDevelopmentsList();
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
                        <div className={cssClass.container}>

                            <div className={cssClass.containerLeft}>
                                <p className={cssClass.PublishedDate}>
                                    {new Date(
                                        this.state.projectBody.last_edited
                                    ).toDateString()}
                                </p>
                            </div>

                            <div className={cssClass.containerRight} onclick="myFunction()">
                            <Button variant="outlined" color="primary"  onClick={myFunction}>
                              Generate report
                            </Button>
                            </div>
                        </div>

                        <HR />
                        <Milestone />

                        <HR />

                        <h1 className={cssClass.TaskHeading}>
                            Key Highlights: {this.state.projectBody.total_tasks}
                        </h1>
                    </div>

                    <Tasks tasksList={this.state.tasks} />

                    <div className={cssClass.ProjectBodyDivN}>
                        <h1 className={cssClass.TaskHeading}>
                            Detailed Plan:
                        </h1>
                    </div>

                    <Phases0 phasesList={this.state.phases} />

                    <div className={cssClass.ProjectBodyDivN}>
                            <div className={cssClass.containerLeft}>
                                <h1 className={cssClass.TaskHeading}>
                                    Deliverables:
                                </h1>
                            </div>
                            <div className={cssClass.containerRight}>
                                <ReactHTMLTableToExcel
                                              id="test-table-xls-button"
                                              className="download-table-xls-button"
                                              table="table-to-xls"
                                              filename="Deliverables"
                                              sheet="Deliverables"
                                              buttonText="Download"/>
                            </div>
                    </div>

                    <Deliverables deliverablesList={this.state.deliverables} />

                    <div className={cssClass.ProjectBodyDivN}>
                        <h1 className={cssClass.TaskHeading}>
                            Cut Tracker:
                        </h1>
                    </div>
                    <div className={cssClass.ProjectBodyDivN}>
                        <Developments developmentsList={this.state.developments} />
                    </div>

                    <div className={cssClass.ProjectBodyDivN}>
                        <h1 className={cssClass.TaskHeading}>
                            Risks:
                        </h1>

                    </div>

                    <Risks risksList={this.state.risks}/>


                    <div className={cssClass.ProjectBodyDivN}>
                        <h1 className={cssClass.TaskHeading}>
                            Issues:
                        </h1>
                    </div>

                    <Issues issuesList={this.state.issues} />


                    <Box pt={4}>
                      <Copyright />
                    </Box>

                </Auz>
            );
        }

        return projectBody;
    }
}

export default ProjectBody;

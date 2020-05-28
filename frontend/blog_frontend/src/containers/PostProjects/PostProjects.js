// Post List For Homepage

import React, { Component } from "react";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import cssClass from "./PostProjects.css";
import AxiosInstance from "../../AxiosInstance";
import Spinner from "../../components/UI/Spinner/Spinner";
import Auz from "../../hoc/Auz/Auz";
import Dashboard from "./../MaterialUI/Dashboard";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Chart from '../MaterialUI/Chart';
import Deposits from '../MaterialUI/Deposits';
import Graphs from '../MaterialUI/Graphs';
import RiskStatusX from '../../components/Risks/RiskStatusX';
import IssueStatusX from '../../components/Issues/IssueStatusX';
import ActionStatus from '../../components/Actions/ActionStatus';
import Lookouts from "../../components/Lookouts/Lookouts";
import ProjectsNames from "../../components/Projects/ProjectsNames";

const drawerWidth = 240;


class PostList extends Component {
    state = {
        loading: true,
        projectBody: null,
        lookouts: null,
        risks:null,
        issues:null
    };

    getProjects = () => {
        AxiosInstance.get("projects/")
            .then(response =>
                this.setState({ loading: false, projects: response.data })
            )
            .catch(err => console.log("Error From PostProjects.js", err));
            console.log("Inside PostProjects.js");
    };

    getLookoutsList = () => {
        AxiosInstance.get("lookouts/")
            .then(response => {
                this.setState({ lookouts: response.data });
            })
            .catch(error => {
                alert("Error Loading Lookouts. Try Again..!!");
            });
    };

    getRisksList = () => {
        AxiosInstance.get("risks/")
            .then(response => {
                this.setState({ risks: response.data });
            })
            .catch(error => {
                alert("Error Loading Lookouts. Try Again..!!");
            });
    };

    getIssuesList = () => {
        AxiosInstance.get("issues/")
            .then(response => {
                this.setState({ issues: response.data });
            })
            .catch(error => {
                alert("Error Loading Issues. Try Again..!!");
            });
    };

    renderWholePage = () => {
        this.getProjects();
        this.getLookoutsList();
        this.getRisksList();
        this.getIssuesList();
    };

    componentDidMount() {
        this.renderWholePage();
    }


    render() {
        let projects = <Spinner />;
        const lenLookouts = !this.state.lookouts?0:this.state.lookouts.length;
        const lenRisks = !this.state.risks?0:this.state.risks.length;
        const lenIssues = !this.state.issues?0:this.state.issues.length;



        if (!this.state.loading && this.state.projects) {
            projects = (
                <Auz>
                <div className={cssClass.root}>

                <h1>Check out</h1>
                  <main className={cssClass.content}>
                    <div className={cssClass.appBarSpacer} />
                    <Container maxWidth="lg" className={cssClass.container}>
                      <Grid container spacing={3}>

                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                          <Paper className={cssClass.fixedHeightPaper}>
                            <Chart />
                          </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={3}>
                          <Paper className={cssClass.fixedHeightPaper}>
                            <ProjectsNames projectList={this.state.projects} />
                          </Paper>
                        </Grid>
                        {/* Recent Risks */}
                        <Grid item xs={3} >
                          <Paper className={cssClass.paperX}>
                            {lenRisks>0 ?(
                            <div>
                              <RiskStatusX risksList = {this.state.risks}/>
                              </div>
                              ):(<div></div>)}
                          </Paper>
                        </Grid>

                        {/* Recent Issues */}
                        <Grid item xs={3} >
                          <Paper className={cssClass.paperX}>
                              {lenIssues>0 ?(
                              <div>
                                <IssueStatusX issuesList = {this.state.issues}/>
                                </div>
                                ):(<div></div>)}
                          </Paper>
                        </Grid>

                        {/* Recent Action */}
                        <Grid item xs={3}>
                          <Paper className={cssClass.paperX}>
                          <ActionStatus />
                          </Paper>
                        </Grid>

                        {/* Recent Key highlights */}
                        <Grid item xs={3}>
                          <Paper className={cssClass.paperX}>
                              {lenLookouts>0 ?(
                              <div>
                                    <Lookouts lookoutsList={this.state.lookouts} />
                              </div>
                              ):(<div></div>)}
                          </Paper>
                        </Grid>
                      </Grid><br/>


                    </Container>
                  </main>
                </div>



                </Auz>
            );
        }
        return (
          <div>
          <Dashboard/>
          {projects}
          </div>
        );
    }
}

export default PostList;

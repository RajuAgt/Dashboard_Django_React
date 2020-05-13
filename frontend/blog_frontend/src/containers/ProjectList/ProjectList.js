// Project List For Homepage

import React, { Component } from "react";

import AxiosInstance from "../../AxiosInstance";
import Spinner from "../../components/UI/Spinner/Spinner";
import Projects from "../../components/Projects/Projects";
import Copyright from '../../components/UI/Footer/Copyright'
import cssClass from "./ProjectList.css";

import Box from '@material-ui/core/Box';

class ProjectList extends Component {
    state = {
        projects: null,
        loading: true
    };

    componentWillMount() {
        AxiosInstance.get("projects/")
            .then(response =>
                this.setState({ projects: response.data, loading: false })
            )
            .catch(err => console.log("Error From ProjectList.js", err));
        console.log("Inside ProjectList.js");
    }

    render() {
        let projectList = <Spinner />;
        if (!this.state.loading && this.state.projects) {
            projectList = <Projects projectList={this.state.projects} />;
        }

        return (
          <div className={cssClass.ProjectList}>{projectList}
          <Box pt={4}>
            <Copyright />
          </Box>
          </div>
        );
    }
}

export default ProjectList;

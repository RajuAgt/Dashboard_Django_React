import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import cssClass from "./ProjectList.css";
import * as actions from "../../../store/actions/index";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import AxiosInstance from "../../../AxiosInstance";
import Aux from "../../../hoc/Aux/Aux";

class ProjectList extends Component {
    getAllProjects = () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                AUTHORIZATION: "JWT " + this.props.token
            }
        };
        this.props.onAdminViewAllProjects(config);
    };
    componentDidMount() {
        this.getAllProjects();
    }

    projectDeleteHandler = slug => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                AUTHORIZATION: "JWT " + this.props.token
            }
        };

        let confirmation = window.confirm("Do You Want To Delete This Project?");

        if (confirmation) {
            AxiosInstance.delete(
                "/admin-panel/projects/view/" + slug + "/",
                config
            )
                .then(response => {
                    alert("Project Deleted");
                    this.getAllProjects();
                })
                .catch(error => {
                    alert("Something Went Wrong");
                });
        }
    };

    render() {
        let projectsList = this.props.allProjects;
        if (this.props.allProjects) {
            projectsList = this.props.allProjects.map(project => (
                <tr key={project.slug}>
                    <td>{project.title}</td>
                    <td>{project.total_tasks}</td>
                    <td>{project.author_full_name}</td>
                    {project.is_published ? (
                        <td style={{ color: "green" }}>Published</td>
                    ) : (
                        <td style={{ color: "red" }}>Not Published</td>
                    )}
                    <td>
                        <div className={cssClass.Actions}>
                            <Link to={"/admin-panel/projects/detail/" + project.slug}>
                                <Button>Edit</Button>
                            </Link>
                        </div>
                        <Button
                            red
                            clicked={this.projectDeleteHandler}
                            identifier={project.slug}
                        >
                            Delete
                        </Button>
                    </td>
                    <td>
                        <Link to={"/admin-panel/tasks/list/" + project.slug}>
                            View Tasks
                        </Link>
                    </td>
                </tr>
            ));
        }

        let projectsListTable = <Spinner />;

        if (!this.props.loading && this.props.allProjects) {
            projectsListTable = (
                <div className={cssClass.OuterWrapper}>
                    <table className={cssClass.Table}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Total Tasks</th>
                                <th>Author</th>
                                <th>Status</th>
                                <th>Actions</th>
                                <th>Tasks</th>
                            </tr>
                        </thead>
                        <tbody>{projectsList}</tbody>
                    </table>
                </div>
            );
        }

        return (
            <Aux>
                <div className={cssClass.Title}>All Projects</div>
                <div>{this.props.allProjects ? projectsListTable : <Spinner />}</div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        loading: state.admin.loading,
        allProjects: state.admin.allProjects
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAdminViewAllProjects: config =>
            dispatch(actions.adminViewAllProjects(config))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList);

// Project List For Dashboard

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import cssClass from "./ProjectList.css";
import * as actions from "../../../store/actions/index";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import AxiosInstance from "../../../AxiosInstance";
import Auz from "../../../hoc/Auz/Auz";

class ProjectList extends Component {
    getProjectsList = () => {
        const config = {
            headers: {
                AUTHORIZATION: "JWT " + this.props.token
            }
        };
        this.props.onListProjectsToUserDashboard(config);
    };

    componentDidMount() {
        this.getProjectsList();
    }

    componentWillMount() {
        this.getProjectsList();
    }

    projectDeleteHandler = slug => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                AUTHORIZATION: "JWT " + this.props.token
            },
            data: {
                slug: slug
            }
        };

        let confirmation = window.confirm("Do You Want To Delete This Project?");

        if (confirmation) {
            AxiosInstance.delete("/dashboard/delete-project/", config)
                .then(response => {
                    alert("Project Deleted");
                    this.getProjectsList();
                })
                .catch(error => {
                    alert("Something Went Wrong");
                    this.getProjectsList();
                });
        }
    };

    render() {
        let projectsList = this.props.userProjectsList
            ? this.props.userProjectsList.map(project => (
                  <tr key={project.slug}>
                      <td>{project.projectTitle}</td>
                      <td>{project.total_tasks}</td>
                      <td>{new Date(project.created_on).toDateString()}</td>
                      <td>
                          {project.is_published ? (
                              <span style={{ color: "green" }}>Published</span>
                          ) : (
                              <span style={{ color: "red" }}>
                                  Not Published Yet
                              </span>
                          )}
                      </td>
                      {!project.is_published ? (
                          <td>
                              <div className={cssClass.Actions}>
                                  <Link to={"/" + project.slug + "/edit"}>
                                      <Button>Edit</Button>
                                  </Link>
                              </div>
                              <Button
                                  red
                                  clicked={this.projectDeleteHandler}
                                  slug={project.slug}
                              >
                                  Delete
                              </Button>
                          </td>
                      ) : (
                          <td>
                              <Button
                                  red
                                  clicked={this.projectDeleteHandler}
                                  identifier={project.slug}
                              >
                                  Delete
                              </Button>
                          </td>
                      )}
                  </tr>
              ))
            : null;

        let userProjectsListTable = <Spinner />;

        if (!this.props.loading && this.props.userProjectsList) {
            userProjectsListTable = (
                <div className={cssClass.OuterWrapper}>
                    <table className={cssClass.Table}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Total Tasks</th>
                                <th>Date Created</th>
                                <th>Status</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>{projectsList}</tbody>
                    </table>
                </div>
            );
        }

        return (
            <Auz>
                <div className={cssClass.Title}>Projects List</div>
                <div>{userProjectsListTable}</div>
            </Auz>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userProjectsList: state.project.userProjectsList,
        loading: state.project.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onListProjectsToUserDashboard: config =>
            dispatch(actions.listProjectsToUserDashboard(config))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList);

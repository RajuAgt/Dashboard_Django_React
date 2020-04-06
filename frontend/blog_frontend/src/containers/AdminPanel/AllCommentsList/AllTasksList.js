import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import cssClass from "./AllTasksList.css";
import * as actions from "../../../store/actions/index";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import AxiosInstance from "../../../AxiosInstance";
import Auz from "../../../hoc/Auz/Auz";

class ProjectTasksList extends Component {
    getAllTasks = () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                AUTHORIZATION: "JWT " + this.props.token
            }
        };
        this.props.onAdminTaskListLoad(config, null, false);
    };
    componentDidMount() {
        this.getAllTasks();
    }

    taskDeleteHandler = pk => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                AUTHORIZATION: "JWT " + this.props.token
            }
        };

        let confirmation = window.confirm(
            "Do You Want To Delete This Task?"
        );

        if (confirmation) {
            AxiosInstance.delete(
                "/admin-panel/tasks/detail/" + pk + "/",
                config
            )
                .then(response => {
                    alert("Task Deleted");
                    this.getAllTasks();
                })
                .catch(error => {
                    alert("Something Went Wrong");
                });
        }
    };

    render() {
        let tasksList = this.props.allTasks;
        if (this.props.allTasks) {
            tasksList = this.props.allTasks.map(task => (
                <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.email}</td>
                    <td>{task.post_title}</td>
                    <td>{new Date(task.published_on).toDateString()}</td>
                    {task.is_displayed ? (
                        <td style={{ color: "green" }}>Active</td>
                    ) : (
                        <td style={{ color: "red" }}>Not Active</td>
                    )}
                    <td>
                        <div className={cssClass.Actions}>
                            <Link
                                to={
                                    "/admin-panel/tasks/edit/" +
                                    task.id +
                                    "/"
                                }
                            >
                                <Button>Edit</Button>
                            </Link>
                        </div>
                        <Button
                            red
                            clicked={this.taskDeleteHandler}
                            identifier={task.id}
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
            ));
        }

        let tasksListTable = <Spinner />;

        if (!this.props.loading && this.props.allTasks) {
            tasksListTable = (
                <div className={cssClass.OuterWrapper}>
                    <table className={cssClass.Table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Post Title</th>
                                <th>Published On</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>{tasksList}</tbody>
                    </table>
                </div>
            );
        }

        return (
            <Auz>
                <div className={cssClass.Title}>Tasks List</div>
                <div>
                    {this.props.allTasks ? tasksListTable : <Spinner />}
                </div>
            </Auz>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        loading: state.task.loading,
        allTasks: state.task.allTasks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAdminTaskListLoad: (config, slug, specific) =>
            dispatch(actions.adminTaskListLoad(config, slug, specific))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectTasksList);

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Auz from "../../hoc/Auz/Auz";
import cssClass from "./AdminPanel.css";

class AdminPanel extends Component {
    render() {
        return (
            <Auz>
                <div className={cssClass.Title}>
                    <p>Admin Panel</p>
                </div>
                <div className={cssClass.OuterWrapper}>
                    {" "}
                    <div className={cssClass.InnerWrapper}>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/admin-panel/user-list"
                        >
                            <div className={cssClass.Container}>
                                View All Users
                            </div>
                        </Link>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/admin-panel/create-user"
                        >
                            <div className={cssClass.Container}>
                                Create A New User
                            </div>
                        </Link>
                    </div>
                    <div className={cssClass.InnerWrapper}>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/admin-panel/all-projects"
                        >
                            <div className={cssClass.Container}>
                                View All Projects
                            </div>
                        </Link>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/dashboard/create-new-project"
                        >
                            <div className={cssClass.Container}>
                                Create A New Project
                            </div>
                        </Link>
                    </div>
                    <div className={cssClass.InnerWrapper}>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/admin-panel/tasks/list/all"
                        >
                            <div className={cssClass.Container}>
                                View All Tasks
                            </div>
                        </Link>
                    </div>
                </div>
            </Auz>
        );
    }
}

export default AdminPanel;

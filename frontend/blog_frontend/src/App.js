import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions/index";
import cssClass from "./App.css";
import Layout from "./hoc/Layout/Layout";
import PostProjects from "./containers/PostProjects/PostProjects";
import ProjectList from "./containers/ProjectList/ProjectList";
import ProjectBody from "./containers/ProjectBody/ProjectBody";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const asyncLogin = asyncComponent(() => {
    return import("./containers/Login/Login");
});

const asyncDashboard = asyncComponent(() => {
    return import("./containers/Dashboard/Dashboard");
});

const asyncAdminPanel = asyncComponent(() => {
    return import("./containers/AdminPanel/AdminPanel");
});

const asyncUserProfileView = asyncComponent(() => {
    return import("./containers/Dashboard/UserProfileView/UserProfileView");
});

const asyncUserProfileEdit = asyncComponent(() => {
    return import("./containers/Dashboard/UserProfileEdit/UserProfileEdit");
});

const asyncAdminUserList = asyncComponent(() => {
    return import("./containers/AdminPanel/UserList/UserList");
});

const asyncAdminCreateUser = asyncComponent(() => {
    return import("./containers/AdminPanel/CreateUser/CreateUser");
});

const asyncAdminEditUser = asyncComponent(() => {
    return import("./containers/AdminPanel/EditUser/EditUser");
});

const asyncUserRegistration = asyncComponent(() => {
    return import("./containers/UserRegistartion/UserRegistration");
});

// Updated
const asyncCreateProject = asyncComponent(() => {
    return import("./containers/CreateProject/CreateProject");
});

const asyncProjectListDashboard = asyncComponent(() => {
    return import("./containers/Dashboard/ProjectList/ProjectList");
});

const asyncAdminViewAllProjects = asyncComponent(() => {
    return import("./containers/AdminPanel/PostList/ProjectList");
});

const asyncProjectEdit = asyncComponent(() => {
    return import("./containers/Dashboard/ProjectEdit/ProjectEdit");
});

const asyncAdminEditProject = asyncComponent(() => {
    return import("./containers/AdminPanel/EditPost/EditProject");
});

const asyncAdminProjectTasksList = asyncComponent(() => {
    return import("./containers/AdminPanel/PostCommentsList/ProjectTasksList");
});

const asyncAdminAllTasksList = asyncComponent(() => {
    return import("./containers/AdminPanel/AllCommentsList/AllTasksList");
});

const asyncAdminTaskEdit = asyncComponent(() => {
    return import("./containers/AdminPanel/CommentEdit/TaskEdit");
});


class App extends Component {
    componentDidMount() {
        this.props.onCheckAuthStatus();
    }

    render() {
        const routesForLoggedInUsers = (
            <Switch>

                <Route
                    path="/admin-panel/users/detail/:pk"
                    component={asyncAdminEditUser}
                />

                <Route
                    path="/admin-panel/create-user"
                    component={asyncAdminCreateUser}
                />
                <Route
                    path="/admin-panel/user-list"
                    component={asyncAdminUserList}
                />
                {this.props.isUserProfile ? (
                    <Route
                        path="/dashboard/profile/edit"
                        component={asyncUserProfileEdit}
                    />
                ) : null}
                <Route
                    path="/dashboard/profile"
                    component={asyncUserProfileView}
                />
//Updated
                <Route
                    path="/dashboard/project-list"
                    component={asyncProjectListDashboard}
                />
                <Route
                    path="/dashboard/create-new-project"
                    component={asyncCreateProject}
                />
                <Route
                    path="/admin-panel/tasks/edit/:pk"
                    component={asyncAdminTaskEdit}
                />
                <Route
                    path="/admin-panel/tasks/list/all"
                    component={asyncAdminAllTasksList}
                />
                <Route
                    path="/admin-panel/tasks/list/:slug"
                    component={asyncAdminProjectTasksList}
                />
                <Route
                    path="/admin-panel/projects/detail/:slug"
                    component={asyncAdminEditProject}
                />
                <Route path="/:slug/edit" component={asyncProjectEdit} />
                <Route
                    path="/admin-panel/all-projects"
                    component={asyncAdminViewAllProjects}
                />

                <Route path="/admin-panel" component={asyncAdminPanel} />
                <Route path="/dashboard" component={asyncDashboard} />
                <Route path="/projects/view/:slug/" component={ProjectBody} />
                <Route path="/projects" component={ProjectList} />
                <Route path="/" component={PostProjects} />
            </Switch>
        );

        const routesForAnonymousUsers = (
            <Switch>
                //<Route path="/register" component={asyncUserRegistration} />
                <Route path="/login" component={asyncLogin} />
                <Route path="/" component={ProjectList} />
            </Switch>
        );
        return (
            <div className={cssClass.App}>
                <Layout>
                    {this.props.isAuth
                        ? routesForLoggedInUsers
                        : routesForAnonymousUsers}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null,
        isUserProfile: state.user.userProfile !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCheckAuthStatus: () => dispatch(actions.authLoginCheckState())
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);

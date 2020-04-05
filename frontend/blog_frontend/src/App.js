import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions/index";
import cssClass from "./App.css";
import Layout from "./hoc/Layout/Layout";
import PostList from "./containers/PostList/PostList";
import PostProjects from "./containers/PostProjects/PostProjects";
import ProjectList from "./containers/ProjectList/ProjectList";
import PostBody from "./containers/PostBody/PostBody";
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

const asyncCreatePost = asyncComponent(() => {
    return import("./containers/CreatePost/CreatePost");
});

const asyncPostListDashboard = asyncComponent(() => {
    return import("./containers/Dashboard/PostList/PostList");
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

const asyncAdminViewAllPosts = asyncComponent(() => {
    return import("./containers/AdminPanel/PostList/PostList");
});

const asyncPostEdit = asyncComponent(() => {
    return import("./containers/Dashboard/PostEdit/PostEdit");
});

const asyncAdminEditUser = asyncComponent(() => {
    return import("./containers/AdminPanel/EditUser/EditUser");
});

const asyncAdminEditPost = asyncComponent(() => {
    return import("./containers/AdminPanel/EditPost/EditPost");
});

const asyncAdminPostCommentsList = asyncComponent(() => {
    return import("./containers/AdminPanel/PostCommentsList/PostCommentsList");
});

const asyncAdminAllCommentsList = asyncComponent(() => {
    return import("./containers/AdminPanel/AllCommentsList/AllCommentsList");
});

const asyncAdminCommentEdit = asyncComponent(() => {
    return import("./containers/AdminPanel/CommentEdit/CommentEdit");
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

class App extends Component {
    componentDidMount() {
        this.props.onCheckAuthStatus();
    }

    render() {
        const routesForLoggedInUsers = (
            <Switch>
                <Route
                    path="/admin-panel/comments/edit/:pk"
                    component={asyncAdminCommentEdit}
                />
                <Route
                    path="/admin-panel/comments/list/all"
                    component={asyncAdminAllCommentsList}
                />
                <Route
                    path="/admin-panel/comments/list/:slug"
                    component={asyncAdminPostCommentsList}
                />
                <Route
                    path="/admin-panel/posts/detail/:slug"
                    component={asyncAdminEditPost}
                />
                <Route
                    path="/admin-panel/users/detail/:pk"
                    component={asyncAdminEditUser}
                />
                <Route path="/:slug/edit" component={asyncPostEdit} />
                <Route
                    path="/admin-panel/all-posts"
                    component={asyncAdminViewAllPosts}
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
                <Route
                    path="/dashboard/post-list"
                    component={asyncPostListDashboard}
                />
                <Route
                    path="/dashboard/create-new-post"
                    component={asyncCreatePost}
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

                <Route path="/admin-panel" component={asyncAdminPanel} />
                <Route path="/dashboard" component={asyncDashboard} />
                <Route path="/projects/view/:slug/" component={ProjectBody} />
                <Route path="/projects" component={ProjectList} />
                <Route path="/posts/view/:slug/" component={PostBody} />
                <Route path="/" component={PostProjects} />
            </Switch>
        );

        const routesForAnonymousUsers = (
            <Switch>
                <Route path="/register" component={asyncUserRegistration} />
                <Route path="/login" component={asyncLogin} />
                <Route path="/posts/view/:slug/" component={PostBody} />
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

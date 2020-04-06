import React, { Component } from "react";
import { connect } from "react-redux";

import cssClass from "./Dashboard.css";
import { Redirect, Link } from "react-router-dom";
import Auz from "../../hoc/Auz/Auz";
import * as actions from "../../store/actions/index";

class Dashboard extends Component {
    onLogoutClickHandler = () => {
        this.props.onClickLogout();
        this.props.history.go("/");
    };

    render() {
        return (
            <Auz>
                {!this.props.isAuth ? <Redirect to="/" /> : null}
                <div className={cssClass.Title}>
                    <p>Welcome {this.props.username}</p>
                </div>
                <div className={cssClass.OuterWrapper}>
                    {" "}
                    <div className={cssClass.InnerWrapper}>
                        <Link to="/dashboard/profile">
                            <div className={cssClass.Container}>
                                View Your Profile
                            </div>
                        </Link>
                    </div>
                    <div className={cssClass.InnerWrapper}>
                        <Link to="/dashboard/create-new-project">
                            <div className={cssClass.Container}>
                                Create New Project
                            </div>
                        </Link>
                        <Link to="/dashboard/project-list">
                            <div className={cssClass.Container}>Your Projects</div>
                        </Link>
                    </div>
                    <div className={cssClass.InnerWrapper}>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/admin-panel"
                        >
                            {" "}
                            <div className={cssClass.Container}>
                                Admin Panel
                            </div>
                        </Link>
                        <div
                            className={cssClass.Container}
                            onClick={this.onLogoutClickHandler}
                        >
                            Logout
                        </div>
                    </div>
                </div>
            </Auz>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null,
        username: state.auth.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickLogout: () => dispatch(actions.logout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

import * as actionsTypes from "./actionTypes";
import AxiosInstance from "../../AxiosInstance";

export const sendNewProjectToServerInit = () => {
    return {
        type: actionsTypes.SEND_NEW_PROJECT_TO_SERVER_INIT
    };
};

export const sendNewProjectToServerSuccess = () => {
    return {
        type: actionsTypes.SEND_NEW_PROJECT_TO_SERVER_SUCCESS
    };
};

export const sendNewProjectToServerFail = () => {
    return {
        type: actionsTypes.SEND_NEW_PROJECT_TO_SERVER_FAIL
    };
};

export const sendNewProjectToServer = (projectData, config) => {
    return dispatch => {
        dispatch(sendNewProjectToServerInit());
        AxiosInstance.post("dashboard/create-new-project/", projectData, config)
            .then(response => {
                alert("Project Submitted Successfully");
                dispatch(sendNewProjectToServerSuccess());
            })
            .catch(error => {
                // alert(error.);
                console.log(error.response.data);
                dispatch(sendNewProjectToServerFail());
            });
    };
};

export const listProjectsToUserDashboardInit = () => {
    return {
        type: actionsTypes.LIST_PROJECTS_TO_USER_DASHBOARD_INIT
    };
};

export const listProjectsToUserDashboardSuccess = userProjects => {
    return {
        type: actionsTypes.LIST_PROJECTS_TO_USER_DASHBOARD_SUCCESS,
        userProjects: userProjects
    };
};

export const listProjectsToUserDashboardFail = error => {
    return {
        type: actionsTypes.LIST_PROJECTS_TO_USER_DASHBOARD_FAIL,
        error: error
    };
};

export const listProjectsToUserDashboard = config => {
    return dispatch => {
        dispatch(listProjectsToUserDashboardInit());
        AxiosInstance.get("/dashboard/project-list", config)
            .then(response => {
                dispatch(listProjectsToUserDashboardSuccess(response.data));
            })
            .catch(error => {
                alert(error);
                dispatch(listProjectsToUserDashboardFail());
            });
    };
};

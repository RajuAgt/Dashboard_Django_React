import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
    loading: false,
    userProjectsList: []
};

const sendNewProjectToServerInit = (state, action) => {
    return updateObject(state, { loading: true, userProjectsList: null });
};

const sendNewProjectToServerSuccess = (state, action) => {
    return updateObject(state, { loading: false, userProjectsList: null });
};

const sendNewProjectToServerFail = (state, action) => {
    return updateObject(state, { loading: false, userProjectsList: null });
};

const listProjectsToUserDashboardInit = (state, action) => {
    return updateObject(state, { loading: false, userProjectsList: null });
};

const listProjectsToUserDashboardSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        userProjectsList: action.userProjects
    });
};

const listProjectsToUserDashboardFail = (state, action) => {
    return updateObject(state, { loading: false, userProjectsList: null });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_NEW_PROJECT_TO_SERVER_INIT:
            return sendNewProjectToServerInit(state, action);
        case actionTypes.SEND_NEW_PROJECT_TO_SERVER_SUCCESS:
            return sendNewProjectToServerSuccess(state, action);
        case actionTypes.SEND_NEW_PROJECT_TO_SERVER_FAIL:
            return sendNewProjectToServerFail(state, action);
        case actionTypes.LIST_PROJECTS_TO_USER_DASHBOARD_INIT:
            return listProjectsToUserDashboardInit(state, action);
        case actionTypes.LIST_PROJECTS_TO_USER_DASHBOARD_SUCCESS:
            return listProjectsToUserDashboardSuccess(state, action);
        case actionTypes.LIST_PROJECTS_TO_USER_DASHBOARD_FAIL:
            return listProjectsToUserDashboardFail(state, action);
        default:
            return state;
    }
};

export default reducer;

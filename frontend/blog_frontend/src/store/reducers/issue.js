import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
    loading: false,
    error: null,
    allIssues: null
};

const createIssueInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allIssues: null
    });
};

const createIssueSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allIssues: null
    });
};

const createIssueFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allIssues: null
    });
};

const adminIssueListLoadInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allIssues: null
    });
};

const adminIssueListLoadSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allIssues: action.allIssues
    });
};

const adminIssueListLoadFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allIssues: null
    });
};

const adminIssueEditInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allIssues: null
    });
};

const adminIssueEditSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allIssues: null
    });
};

const adminIssueEditFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allIssues: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_ISSUE_INIT:
            return createIssueInit(state, action);
        case actionTypes.CREATE_ISSUE_SUCCESS:
            return createIssueSuccess(state, action);
        case actionTypes.CREATE_ISSUE_FAIL:
            return createIssueFail(state, action);
        case actionTypes.ADMIN_ISSUE_LIST_LOAD_INIT:
            return adminIssueListLoadInit(state, action);
        case actionTypes.ADMIN_ISSUE_LIST_LOAD_SUCCESS:
            return adminIssueListLoadSuccess(state, action);
        case actionTypes.ADMIN_ISSUE_LIST_LOAD_FAIL:
            return adminIssueListLoadFail(state, action);
        case actionTypes.ADMIN_ISSUE_EDIT_INIT:
            return adminIssueEditInit(state, action);
        case actionTypes.ADMIN_ISSUE_EDIT_SUCCESS:
            return adminIssueEditSuccess(state, action);
        case actionTypes.ADMIN_ISSUE_EDIT_FAIL:
            return adminIssueEditFail(state, action);
        default:
            return state;
    }
};

export default reducer;

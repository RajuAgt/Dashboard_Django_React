import * as actionTypes from "./actionTypes";

import AxiosInstance from "../../AxiosInstance";

export const createIssueInit = () => {
    return {
        type: actionTypes.CREATE_ISSUE_INIT
    };
};

export const createIssueSuccess = () => {
    return {
        type: actionTypes.CREATE_ISSUE_SUCCESS
    };
};

export const createIssueFail = error => {
    return {
        type: actionTypes.CREATE_ISSUE_FAIL,
        error: error
    };
};

export const createIssue = (data, slug, refreshFunction) => {
    return dispatch => {
        dispatch(createIssueInit());
        AxiosInstance.post("/issues/create/" + slug + "/", data)
            .then(response => {
                alert("Issue Added Successfully");
                dispatch(createIssueSuccess());
                refreshFunction();
            })
            .catch(error => {
                alert("ERROR..!! Something Went Wrong");
                dispatch(createIssueFail(error));
            });
    };
};

export const adminIssueListLoadInit = () => {
    return {
        type: actionTypes.ADMIN_ISSUE_LIST_LOAD_INIT
    };
};

export const adminIssueListLoadSuccess = allIssues => {
    return {
        type: actionTypes.ADMIN_ISSUE_LIST_LOAD_SUCCESS,
        allIssues: allIssues
    };
};

export const adminIssueListLoadFail = error => {
    return {
        type: actionTypes.ADMIN_ISSUE_LIST_LOAD_FAIL,
        error: error
    };
};

export const adminIssueListLoad = (config, slug = null, specific = false) => {
    return dispatch => {
        dispatch(adminIssueListLoadInit());
        let getUrl = "/admin-panel/issues/list/all/";
        if (specific) {
            getUrl = "/admin-panel/issues/list/" + slug + "/";
        }
        AxiosInstance.get(getUrl, config)
            .then(response => {
                dispatch(adminIssueListLoadSuccess(response.data));
            })
            .catch(error => {
                dispatch(adminIssueListLoadFail(error));
            });
    };
};

export const adminIssueEditInit = () => {
    return {
        type: actionTypes.ADMIN_ISSUE_EDIT_INIT
    };
};

export const adminIssueEditSuccess = () => {
    return {
        type: actionTypes.ADMIN_ISSUE_EDIT_SUCCESS
    };
};

export const adminIssueEditFail = error => {
    return {
        type: actionTypes.ADMIN_ISSUE_EDIT_FAIL,
        error: error
    };
};

export const adminIssueEdit = (config, pk) => {
    return dispatch => {
        dispatch(adminIssueEditInit());
        AxiosInstance.patch(
            "/admin-panel/issues/detail/" + pk + "/",
            null,
            config
        )
            .then(response => {
                dispatch(adminIssueEditSuccess());
                alert("Issue Edited Successfully");
            })
            .catch(error => {
                dispatch(adminIssueEditFail(error));
                alert("ERROR...!! Something Went Wrong");
            });
    };
};

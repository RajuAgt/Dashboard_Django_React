import * as actionTypes from "./actionTypes";

import AxiosInstance from "../../AxiosInstance";

export const createTaskInit = () => {
    return {
        type: actionTypes.CREATE_TASK_INIT
    };
};

export const createTaskSuccess = () => {
    return {
        type: actionTypes.CREATE_TASK_SUCCESS
    };
};

export const createTaskFail = error => {
    return {
        type: actionTypes.CREATE_TASK_FAIL,
        error: error
    };
};

export const createTask = (data, slug, refreshFunction) => {
    return dispatch => {
        dispatch(createTaskInit());
        AxiosInstance.post("/tasks/create/" + slug + "/", data)
            .then(response => {
                alert("Task Added Successfully");
                dispatch(createTaskSuccess());
                refreshFunction();
            })
            .catch(error => {
                alert("ERROR..!! Something Went Wrong");
                dispatch(createTaskFail(error));
            });
    };
};

export const adminTaskListLoadInit = () => {
    return {
        type: actionTypes.ADMIN_TASK_LIST_LOAD_INIT
    };
};

export const adminTaskListLoadSuccess = allTasks => {
    return {
        type: actionTypes.ADMIN_TASK_LIST_LOAD_SUCCESS,
        allTasks: allTasks
    };
};

export const adminTaskListLoadFail = error => {
    return {
        type: actionTypes.ADMIN_TASK_LIST_LOAD_FAIL,
        error: error
    };
};

export const adminTaskListLoad = (config, slug = null, specific = false) => {
    return dispatch => {
        dispatch(adminTaskListLoadInit());
        let getUrl = "/admin-panel/tasks/list/all/";
        if (specific) {
            getUrl = "/admin-panel/tasks/list/" + slug + "/";
        }
        AxiosInstance.get(getUrl, config)
            .then(response => {
                dispatch(adminTaskListLoadSuccess(response.data));
            })
            .catch(error => {
                dispatch(adminTaskListLoadFail(error));
            });
    };
};

export const adminTaskEditInit = () => {
    return {
        type: actionTypes.ADMIN_TASK_EDIT_INIT
    };
};

export const adminTaskEditSuccess = () => {
    return {
        type: actionTypes.ADMIN_TASK_EDIT_SUCCESS
    };
};

export const adminTaskEditFail = error => {
    return {
        type: actionTypes.ADMIN_TASK_EDIT_FAIL,
        error: error
    };
};

export const adminTaskEdit = (config, pk) => {
    return dispatch => {
        dispatch(adminTaskEditInit());
        AxiosInstance.patch(
            "/admin-panel/tasks/detail/" + pk + "/",
            null,
            config
        )
            .then(response => {
                dispatch(adminTaskEditSuccess());
                alert("Task Edited Successfully");
            })
            .catch(error => {
                dispatch(adminTaskEditFail(error));
                alert("ERROR...!! Something Went Wrong");
            });
    };
};

import * as actionTypes from "./actionTypes";

import AxiosInstance from "../../AxiosInstance";

export const createActionInit = () => {
    return {
        type: actionTypes.CREATE_ACTION_INIT
    };
};

export const createActionSuccess = () => {
    return {
        type: actionTypes.CREATE_ACTION_SUCCESS
    };
};

export const createActionFail = error => {
    return {
        type: actionTypes.CREATE_ACTION_FAIL,
        error: error
    };
};

export const createAction = (data, slug, refreshFunction) => {
    return dispatch => {
        dispatch(createActionInit());
        AxiosInstance.post("/actions/create/" + slug + "/", data)
            .then(response => {
                alert("Action Added Successfully");
                dispatch(createActionSuccess());
                refreshFunction();
            })
            .catch(error => {
                alert("ERROR..!! Something Went Wrong");
                dispatch(createActionFail(error));
            });
    };
};

export const adminActionListLoadInit = () => {
    return {
        type: actionTypes.ADMIN_ACTION_LIST_LOAD_INIT
    };
};

export const adminActionListLoadSuccess = allActions => {
    return {
        type: actionTypes.ADMIN_ACTION_LIST_LOAD_SUCCESS,
        allActions: allActions
    };
};

export const adminActionListLoadFail = error => {
    return {
        type: actionTypes.ADMIN_ACTION_LIST_LOAD_FAIL,
        error: error
    };
};

export const adminActionListLoad = (config, slug = null, specific = false) => {
    return dispatch => {
        dispatch(adminActionListLoadInit());
        let getUrl = "/admin-panel/actions/list/all/";
        if (specific) {
            getUrl = "/admin-panel/actions/list/" + slug + "/";
        }
        AxiosInstance.get(getUrl, config)
            .then(response => {
                dispatch(adminActionListLoadSuccess(response.data));
            })
            .catch(error => {
                dispatch(adminActionListLoadFail(error));
            });
    };
};

export const adminActionEditInit = () => {
    return {
        type: actionTypes.ADMIN_ACTION_EDIT_INIT
    };
};

export const adminActionEditSuccess = () => {
    return {
        type: actionTypes.ADMIN_ACTION_EDIT_SUCCESS
    };
};

export const adminActionEditFail = error => {
    return {
        type: actionTypes.ADMIN_ACTION_EDIT_FAIL,
        error: error
    };
};

export const adminActionEdit = (config, pk) => {
    return dispatch => {
        dispatch(adminActionEditInit());
        AxiosInstance.patch(
            "/admin-panel/actions/detail/" + pk + "/",
            null,
            config
        )
            .then(response => {
                dispatch(adminActionEditSuccess());
                alert("Action Edited Successfully");
            })
            .catch(error => {
                dispatch(adminActionEditFail(error));
                alert("ERROR...!! Something Went Wrong");
            });
    };
};

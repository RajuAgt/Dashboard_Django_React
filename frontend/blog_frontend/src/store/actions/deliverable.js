import * as actionTypes from "./actionTypes";

import AxiosInstance from "../../AxiosInstance";

export const createDeliverableInit = () => {
    return {
        type: actionTypes.CREATE_DELIVERABLE_INIT
    };
};

export const createDeliverableSuccess = () => {
    return {
        type: actionTypes.CREATE_DELIVERABLE_SUCCESS
    };
};

export const createDeliverableFail = error => {
    return {
        type: actionTypes.CREATE_DELIVERABLE_FAIL,
        error: error
    };
};

export const createDeliverable = (data, slug, refreshFunction) => {
    return dispatch => {
        dispatch(createDeliverableInit());
        AxiosInstance.post("/deliverables/create/" + slug + "/", data)
            .then(response => {
                alert("Deliverable Added Successfully");
                dispatch(createDeliverableSuccess());
                refreshFunction();
            })
            .catch(error => {
                alert("ERROR..!! Something Went Wrong");
                dispatch(createDeliverableFail(error));
            });
    };
};

export const adminDeliverableListLoadInit = () => {
    return {
        type: actionTypes.ADMIN_DELIVERABLE_LIST_LOAD_INIT
    };
};

export const adminDeliverableListLoadSuccess = allDeliverables => {
    return {
        type: actionTypes.ADMIN_DELIVERABLE_LIST_LOAD_SUCCESS,
        allDeliverables: allDeliverables
    };
};

export const adminDeliverableListLoadFail = error => {
    return {
        type: actionTypes.ADMIN_DELIVERABLE_LIST_LOAD_FAIL,
        error: error
    };
};

export const adminDeliverableListLoad = (config, slug = null, specific = false) => {
    return dispatch => {
        dispatch(adminDeliverableListLoadInit());
        let getUrl = "/admin-panel/deliverables/list/all/";
        if (specific) {
            getUrl = "/admin-panel/deliverables/list/" + slug + "/";
        }
        AxiosInstance.get(getUrl, config)
            .then(response => {
                dispatch(adminDeliverableListLoadSuccess(response.data));
            })
            .catch(error => {
                dispatch(adminDeliverableListLoadFail(error));
            });
    };
};

export const adminDeliverableEditInit = () => {
    return {
        type: actionTypes.ADMIN_DELIVERABLE_EDIT_INIT
    };
};

export const adminDeliverableEditSuccess = () => {
    return {
        type: actionTypes.ADMIN_DELIVERABLE_EDIT_SUCCESS
    };
};

export const adminDeliverableEditFail = error => {
    return {
        type: actionTypes.ADMIN_DELIVERABLE_EDIT_FAIL,
        error: error
    };
};

export const adminDeliverableEdit = (config, pk) => {
    return dispatch => {
        dispatch(adminDeliverableEditInit());
        AxiosInstance.patch(
            "/admin-panel/deliverables/detail/" + pk + "/",
            null,
            config
        )
            .then(response => {
                dispatch(adminDeliverableEditSuccess());
                alert("Deliverable Edited Successfully");
            })
            .catch(error => {
                dispatch(adminDeliverableEditFail(error));
                alert("ERROR...!! Something Went Wrong");
            });
    };
};

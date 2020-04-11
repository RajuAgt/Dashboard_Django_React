import * as actionTypes from "./actionTypes";

import AxiosInstance from "../../AxiosInstance";

export const createRiskInit = () => {
    return {
        type: actionTypes.CREATE_RISK_INIT
    };
};

export const createRiskSuccess = () => {
    return {
        type: actionTypes.CREATE_RISK_SUCCESS
    };
};

export const createRiskFail = error => {
    return {
        type: actionTypes.CREATE_RISK_FAIL,
        error: error
    };
};

export const createRisk = (data, slug, refreshFunction) => {
    return dispatch => {
        dispatch(createRiskInit());
        AxiosInstance.post("/risks/create/" + slug + "/", data)
            .then(response => {
                alert("Risk Added Successfully");
                dispatch(createRiskSuccess());
                refreshFunction();
            })
            .catch(error => {
                alert("ERROR..!! Something Went Wrong");
                dispatch(createRiskFail(error));
            });
    };
};

export const adminRiskListLoadInit = () => {
    return {
        type: actionTypes.ADMIN_RISK_LIST_LOAD_INIT
    };
};

export const adminRiskListLoadSuccess = allRisks => {
    return {
        type: actionTypes.ADMIN_RISK_LIST_LOAD_SUCCESS,
        allRisks: allRisks
    };
};

export const adminRiskListLoadFail = error => {
    return {
        type: actionTypes.ADMIN_RISK_LIST_LOAD_FAIL,
        error: error
    };
};

export const adminRiskListLoad = (config, slug = null, specific = false) => {
    return dispatch => {
        dispatch(adminRiskListLoadInit());
        let getUrl = "/admin-panel/risks/list/all/";
        if (specific) {
            getUrl = "/admin-panel/risks/list/" + slug + "/";
        }
        AxiosInstance.get(getUrl, config)
            .then(response => {
                dispatch(adminRiskListLoadSuccess(response.data));
            })
            .catch(error => {
                dispatch(adminRiskListLoadFail(error));
            });
    };
};

export const adminRiskEditInit = () => {
    return {
        type: actionTypes.ADMIN_RISK_EDIT_INIT
    };
};

export const adminRiskEditSuccess = () => {
    return {
        type: actionTypes.ADMIN_RISK_EDIT_SUCCESS
    };
};

export const adminRiskEditFail = error => {
    return {
        type: actionTypes.ADMIN_RISK_EDIT_FAIL,
        error: error
    };
};

export const adminRiskEdit = (config, pk) => {
    return dispatch => {
        dispatch(adminRiskEditInit());
        AxiosInstance.patch(
            "/admin-panel/risks/detail/" + pk + "/",
            null,
            config
        )
            .then(response => {
                dispatch(adminRiskEditSuccess());
                alert("Risk Edited Successfully");
            })
            .catch(error => {
                dispatch(adminRiskEditFail(error));
                alert("ERROR...!! Something Went Wrong");
            });
    };
};

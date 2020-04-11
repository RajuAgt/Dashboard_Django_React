import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
    loading: false,
    error: null,
    allRisks: null
};

const createRiskInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allRisks: null
    });
};

const createRiskSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allRisks: null
    });
};

const createRiskFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allRisks: null
    });
};

const adminRiskListLoadInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allRisks: null
    });
};

const adminRiskListLoadSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allRisks: action.allRisks
    });
};

const adminRiskListLoadFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allRisks: null
    });
};

const adminRiskEditInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allRisks: null
    });
};

const adminRiskEditSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allRisks: null
    });
};

const adminRiskEditFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allRisks: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_RISK_INIT:
            return createRiskInit(state, action);
        case actionTypes.CREATE_RISK_SUCCESS:
            return createRiskSuccess(state, action);
        case actionTypes.CREATE_RISK_FAIL:
            return createRiskFail(state, action);
        case actionTypes.ADMIN_RISK_LIST_LOAD_INIT:
            return adminRiskListLoadInit(state, action);
        case actionTypes.ADMIN_RISK_LIST_LOAD_SUCCESS:
            return adminRiskListLoadSuccess(state, action);
        case actionTypes.ADMIN_RISK_LIST_LOAD_FAIL:
            return adminRiskListLoadFail(state, action);
        case actionTypes.ADMIN_RISK_EDIT_INIT:
            return adminRiskEditInit(state, action);
        case actionTypes.ADMIN_RISK_EDIT_SUCCESS:
            return adminRiskEditSuccess(state, action);
        case actionTypes.ADMIN_RISK_EDIT_FAIL:
            return adminRiskEditFail(state, action);
        default:
            return state;
    }
};

export default reducer;

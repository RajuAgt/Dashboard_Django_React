import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
    loading: false,
    error: null,
    allDeliverables: null
};

const createDeliverableInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allDeliverables: null
    });
};

const createDeliverableSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allDeliverables: null
    });
};

const createDeliverableFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allDeliverables: null
    });
};

const adminDeliverableListLoadInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allDeliverables: null
    });
};

const adminDeliverableListLoadSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allDeliverables: action.allTasks
    });
};

const adminDeliverableListLoadFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allDeliverables: null
    });
};

const adminDeliverableEditInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allDeliverables: null
    });
};

const adminDeliverableEditSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allDeliverables: null
    });
};

const adminDeliverableEditFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allDeliverables: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_DELIVERABLE_INIT:
            return createDeliverableInit(state, action);
        case actionTypes.CREATE_DELIVERABLE_SUCCESS:
            return createDeliverableSuccess(state, action);
        case actionTypes.CREATE_DELIVERABLE_FAIL:
            return createDeliverableFail(state, action);
        case actionTypes.ADMIN_DELIVERABLE_LIST_LOAD_INIT:
            return adminDeliverableListLoadInit(state, action);
        case actionTypes.ADMIN_DELIVERABLE_LIST_LOAD_SUCCESS:
            return adminDeliverableListLoadSuccess(state, action);
        case actionTypes.ADMIN_DELIVERABLE_LIST_LOAD_FAIL:
            return adminDeliverableListLoadFail(state, action);
        case actionTypes.ADMIN_DELIVERABLE_EDIT_INIT:
            return adminDeliverableEditInit(state, action);
        case actionTypes.ADMIN_DELIVERABLE_EDIT_SUCCESS:
            return adminDeliverableEditSuccess(state, action);
        case actionTypes.ADMIN_DELIVERABLE_EDIT_FAIL:
            return adminDeliverableEditFail(state, action);
        default:
            return state;
    }
};

export default reducer;

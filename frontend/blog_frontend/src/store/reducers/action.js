import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
    loading: false,
    error: null,
    allActions: null
};

const createActionInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allActions: null
    });
};

const createActionSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allActions: null
    });
};

const createActionFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allActions: null
    });
};

const adminActionListLoadInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allActions: null
    });
};

const adminActionListLoadSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allActions: action.allActions
    });
};

const adminActionListLoadFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allActions: null
    });
};

const adminActionEditInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allActions: null
    });
};

const adminActionEditSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allActions: null
    });
};

const adminActionEditFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allActions: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_ACTION_INIT:
            return createActionInit(state, action);
        case actionTypes.CREATE_ACTION_SUCCESS:
            return createActionSuccess(state, action);
        case actionTypes.CREATE_ACTION_FAIL:
            return createActionFail(state, action);
        case actionTypes.ADMIN_ACTION_LIST_LOAD_INIT:
            return adminActionListLoadInit(state, action);
        case actionTypes.ADMIN_ACTION_LIST_LOAD_SUCCESS:
            return adminActionListLoadSuccess(state, action);
        case actionTypes.ADMIN_ACTION_LIST_LOAD_FAIL:
            return adminActionListLoadFail(state, action);
        case actionTypes.ADMIN_ACTION_EDIT_INIT:
            return adminActionEditInit(state, action);
        case actionTypes.ADMIN_ACTION_EDIT_SUCCESS:
            return adminActionEditSuccess(state, action);
        case actionTypes.ADMIN_ACTION_EDIT_FAIL:
            return adminActionEditFail(state, action);
        default:
            return state;
    }
};

export default reducer;

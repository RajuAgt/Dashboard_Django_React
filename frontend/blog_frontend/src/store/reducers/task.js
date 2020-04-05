import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
    loading: false,
    error: null,
    allTasks: null
};

const createTaskInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allTasks: null
    });
};

const createTaskSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allTasks: null
    });
};

const createTaskFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allTasks: null
    });
};

const adminTaskListLoadInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allTasks: null
    });
};

const adminTaskListLoadSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allTasks: action.allTasks
    });
};

const adminTaskListLoadFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allTasks: null
    });
};

const adminTaskEditInit = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null,
        allTasks: null
    });
};

const adminTaskEditSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        allTasks: null
    });
};

const adminTaskEditFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error,
        allTasks: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_TASK_INIT:
            return createTaskInit(state, action);
        case actionTypes.CREATE_TASK_SUCCESS:
            return createTaskSuccess(state, action);
        case actionTypes.CREATE_TASK_FAIL:
            return createTaskFail(state, action);
        case actionTypes.ADMIN_TASK_LIST_LOAD_INIT:
            return adminTaskListLoadInit(state, action);
        case actionTypes.ADMIN_TASK_LIST_LOAD_SUCCESS:
            return adminTaskListLoadSuccess(state, action);
        case actionTypes.ADMIN_TASK_LIST_LOAD_FAIL:
            return adminTaskListLoadFail(state, action);
        case actionTypes.ADMIN_TASK_EDIT_INIT:
            return adminTaskEditInit(state, action);
        case actionTypes.ADMIN_TASK_EDIT_SUCCESS:
            return adminTaskEditSuccess(state, action);
        case actionTypes.ADMIN_TASK_EDIT_FAIL:
            return adminTaskEditFail(state, action);
        default:
            return state;
    }
};

export default reducer;

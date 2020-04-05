import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
    newUser: null,
    userList: null,
    loading: false,
    error: null,
    allPosts: null,
    allProjects: null
};

const adminUserListViewInit = (state, action) => {
    return updateObject(state, {
        userList: null,
        loading: true,
        error: null,
        newUser: null,
        allPosts: null,
        allProjects: null
    });
};

const adminUserListViewSuccess = (state, action) => {
    return updateObject(state, {
        userList: action.data,
        loading: false,
        error: null,
        newUser: null,
        allPosts: null,
        allProjects: null
    });
};

const adminUserListViewFail = (state, action) => {
    return updateObject(state, {
        userList: null,
        loading: false,
        error: action.error,
        newUser: null,
        allPosts: null,
        allProjects: null
    });
};

const adminCreateUserInit = (state, action) => {
    return updateObject(state, {
        userList: null,
        loading: true,
        error: null,
        newUser: null,
        allPosts: null,
        allProjects: null
    });
};

const adminCreateUserSuccess = (state, action) => {
    return updateObject(state, {
        userList: null,
        loading: false,
        error: null,
        newUser: action.data,
        allPosts: null,
        allProjects: null
    });
};

const adminCreateUserFail = (state, action) => {
    return updateObject(state, {
        userList: null,
        loading: false,
        error: action.error,
        newUser: null,
        allPosts: null,
        allProjects: null
    });
};

const adminViewAllPostsInit = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: true,
        error: null,
        allPosts: null,
        allProjects: null
    });
};

const adminViewAllPostsSuccess = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: null,
        allPosts: action.postsData,
        allProjects: null
    });
};

const adminViewAllPostsFail = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: action.error,
        allPosts: null,
        allProjects: null
    });
};

const adminEditUserInit = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: true,
        error: null,
        allPosts: null,
        allProjects: null
    });
};

const adminEditUserSuccess = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: null,
        allPosts: null,
        allProjects: null
    });
};

const adminEditUserFail = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: action.error,
        allPosts: null,
        allProjects: null
    });
};

const adminEditPostInit = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: true,
        error: null,
        allPosts: null,
        allProjects: null
    });
};

const adminEditPostSuccess = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: null,
        allPosts: null,
        allProjects: null
    });
};

const adminEditPostFail = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: action.error,
        allPosts: null,
        allProjects: null
    });
};

// Updated
const adminViewAllProjectsInit = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: true,
        error: null,
        allPosts: null,
        allProjects: null
    });
};

const adminViewAllProjectsSuccess = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: null,
        allPosts: null,
        allProjects: action.projectsData
    });
};

const adminViewAllProjectsFail = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: action.error,
        allPosts: null,
        allProjects: null
    });
};

const adminEditProjectInit = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: true,
        error: null,
        allPosts: null,
        allProjects: null
    });
};

const adminEditProjectSuccess = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: null,
        allPosts: null,
        allProjects: null
    });
};

const adminEditProjectFail = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: action.error,
        allPosts: null,
        allProjects: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_USER_LIST_VIEW_INIT:
            return adminUserListViewInit(state, action);
        case actionTypes.ADMIN_USER_LIST_VIEW_SUCCESS:
            return adminUserListViewSuccess(state, action);
        case actionTypes.ADMIN_USER_LIST_VIEW_FAIL:
            return adminUserListViewFail(state, action);
        case actionTypes.ADMIN_CREATE_USER_INIT:
            return adminCreateUserInit(state, action);
        case actionTypes.ADMIN_CREATE_USER_SUCCESS:
            return adminCreateUserSuccess(state, action);
        case actionTypes.ADMIN_CREATE_USER_FAIL:
            return adminCreateUserFail(state, action);
        case actionTypes.ADMIN_VIEW_ALL_POSTS_INIT:
            return adminViewAllPostsInit(state, action);
        case actionTypes.ADMIN_VIEW_ALL_POSTS_SUCCESS:
            return adminViewAllPostsSuccess(state, action);
        case actionTypes.ADMIN_VIEW_ALL_POSTS_FAIL:
            return adminViewAllPostsFail(state, action);
        case actionTypes.ADMIN_EDIT_USER_INIT:
            return adminEditUserInit(state, action);
        case actionTypes.ADMIN_EDIT_USER_SUCCESS:
            return adminEditUserSuccess(state, action);
        case actionTypes.ADMIN_EDIT_USER_FAIL:
            return adminEditUserFail(state, action);
        case actionTypes.ADMIN_EDIT_POST_INIT:
            return adminEditPostInit(state, action);
        case actionTypes.ADMIN_EDIT_POST_SUCCESS:
            return adminEditPostSuccess(state, action);
        case actionTypes.ADMIN_EDIT_POST_FAIL:
            return adminEditPostFail(state, action);
        case actionTypes.ADMIN_VIEW_ALL_PROJECTS_INIT:
            return adminViewAllProjectsInit(state, action);
        case actionTypes.ADMIN_VIEW_ALL_PROJECTS_SUCCESS:
            return adminViewAllProjectsSuccess(state, action);
        case actionTypes.ADMIN_VIEW_ALL_PROJECTS_FAIL:
            return adminViewAllProjectsFail(state, action);
        case actionTypes.ADMIN_EDIT_PROJECT_INIT:
            return adminEditProjectInit(state, action);
        case actionTypes.ADMIN_EDIT_PROJECT_SUCCESS:
            return adminEditProjectSuccess(state, action);
        case actionTypes.ADMIN_EDIT_PROJECT_FAIL:
            return adminEditProjectFail(state, action);     
        default:
            return state;
    }
};

export default reducer;

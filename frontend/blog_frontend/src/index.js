import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import AuthReducer from "./store/reducers/auth";
import UserReducer from "./store/reducers/user";
import AdminReducer from "./store/reducers/admin";
import ProjectReducer from "./store/reducers/project";
import TaskReducer from "./store/reducers/task";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    admin: AdminReducer,
    project: ProjectReducer,
    task: TaskReducer
});

const store = createStore(rootStore, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

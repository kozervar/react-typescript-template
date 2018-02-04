import * as React from "react";
import * as ReactDOM from "react-dom";

import EmailTypes from "./components/EmailTypes";
import "./styles/style.scss";

import {userOperation} from './reducers/EmailTypesReducer';
import { applyMiddleware, createStore, StoreCreator } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

// let middleware = [
//     createEpicMiddleware(rootEpic),
// ];

const devTool = (f: StoreCreator) => {
    return ((window as any).__REDUX_DEVTOOLS_EXTENSION__) ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ : f
};

const store = devTool(createStore)(userOperation, {
    userCount: 1
});

const app = document.querySelector(".email-types-app");

ReactDOM.render(
    <Provider store={store}>
        <EmailTypes />
    </Provider>,
    app
);

import * as React from "react";
import * as ReactDOM from "react-dom";

import EmailTypes from "./components/EmailTypes";
import "./styles/style.scss";

import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

const app = document.querySelector(".email-types-app");

ReactDOM.render(
    <Provider store={store}>
        <EmailTypes/>
    </Provider>,
    app
);

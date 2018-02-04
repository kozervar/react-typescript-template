import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import "./styles/style.scss";

const app = document.querySelector(".hello-app");
if(app)
    ReactDOM.render(<Hello name="Marcin" />, app);

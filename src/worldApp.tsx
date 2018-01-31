import * as React from "react";
import * as ReactDOM from "react-dom";

import { World } from "./components/World";
import "./styles/style.scss";

const app = document.querySelector(".world-app");

ReactDOM.render(<World name="Malwina" />, app);

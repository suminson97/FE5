import React from "react";
import ReactDom from "react-dom";
import Home from "./components/Home.js";

ReactDom.hydrate(<Home />, document.querySelector("#root"));

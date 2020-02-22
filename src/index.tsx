import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Editor from "./components/pages/Editor";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Editor />, document.getElementById("root"));
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import theme from "./theme";

ReactDOM.render(
  <Router>
    <App theme={`${theme}`}/>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

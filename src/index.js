import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/index.css";
export default function Index() {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(<Index />, document.querySelector("#root"));

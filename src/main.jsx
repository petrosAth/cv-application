import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./stylesheets/modern-normalize.css";
import "./stylesheets/preflight.css";
import "./stylesheets/variables.css";
import "./stylesheets/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

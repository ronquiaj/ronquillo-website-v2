// import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

export default function NextIndexWrapper() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

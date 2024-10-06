import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
// import ReactDOM from 'react-dom/client'; => import ReactDOM from 'react-dom';
import App from "./app";

const root = createRoot(document.getElementById("root"));
root.render(
  <App />
  // <StrictMode>

  // </StrictMode>
);

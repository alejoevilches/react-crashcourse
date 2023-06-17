import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./App.jsx";
import "./index.css";

const domRoot=document.getElementById("root");
const root=ReactDOM.createRoot(domRoot);
root.render(
  <App />
);
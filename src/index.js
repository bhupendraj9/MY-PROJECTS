import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import  ContextFunction from './contexts/MainContext'
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
   <ContextFunction>
   <Toaster></Toaster>
         <App />
   </ContextFunction>
   
  </BrowserRouter>

  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { NotificationContextProvider } from "./context/NotificationContext";
import { NameContextProvider } from "./context/NameProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NameContextProvider>
      <NotificationContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NotificationContextProvider>
    </NameContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

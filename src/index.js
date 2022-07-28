import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//keep track of history where user routing too.
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/context/user.context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

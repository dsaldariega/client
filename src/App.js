import React, { useState } from "react";
import "./App.css";
// import Users from "./components/Users";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Register from "./components/Register";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}
function App() {
  const token = getToken();

  if (!token) {
    return (
      <div className="hold-transition register-page">
        <BrowserRouter>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Login setToken={setToken} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="hold-transition register-page">
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </div>
    );
  }
}

export default App;

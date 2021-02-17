import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Axios from "axios";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login({ setToken }) {
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  // async function submitLogin() {
  //   Axios.post("http://localhost:3000/users/login", {
  //     username: usernameLog,
  //     password: passwordLog,
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //     })

  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  const handleSubmit = async () => {
    const token = await loginUser({
      username: usernameLog,
      password: passwordLog,
    });

    setToken(token);

    // window.location.replace("http://localhost:3000/dashboard");
  };

  return (
    <div className="login-box">
      {/* /.login-logo */}
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <b>Login</b>User
        </div>

        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          {/* <form action="../../index3.html" method="post"> */}
          <div></div>
          <div className="input-group mb-3">
            <input
              type="text"
              onChange={(e) => {
                setUsernameLog(e.target.value);
              }}
              className="form-control"
              placeholder="Input username"
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>

          <div className="input-group mb-3">
            <input
              type="password"
              onChange={(e) => {
                setPasswordLog(e.target.value);
              }}
              className="form-control"
              placeholder="Password"
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                onClick={handleSubmit}
                className="btn btn-primary btn-block"
              >
                Sign In
              </button>
            </div>
            {/* /.col */}
          </div>

          <p className="mb-0">
            <Link to="/register" className="text-center">
              Register a new user
            </Link>
          </p>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div>
  );
}

export default Login;

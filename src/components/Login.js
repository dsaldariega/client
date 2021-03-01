import React from "react";
import { Link, useHistory } from "react-router-dom";


function Login({ setToken, usernameInput, passwordInput, loginUser }) {


  // const history = useHistory();

  // function myTimerLogin() {
  //   setTimeout(function () {
  //     window.location.replace("/dashboard");
  //   }, 1000);
  // }
  // function clearFields() {
  //   setPasswordLog("");
  //   setUsernameLog("");
  // }

  return (
    <div className="login-box">
      {/* /.login-logo */}
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <b>Login</b>User
        </div>

        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form onSubmit={loginUser}>
            <div className="input-group mb-3">
              <input
                type="text"
                // value={usernameLog}
                onChange={usernameInput}
                className="form-control"
                placeholder="Input username"
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input
              // value={passwordLog}
                type="password"
                onChange={passwordInput}
                className="form-control"
                placeholder="Password"
                required
              />
              {/* <button onClick={clearFields}>Back</button> */}
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                
              </div>
              {/* /.col */}
            </div>

            <p className="mb-0">
              <Link to="/register" className="text-center">
                Register a new user
              </Link>
            </p>
          </form>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div>
  );
}

export default Login;

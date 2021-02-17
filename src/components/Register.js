import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const submitRegister = () => {
    Axios.post("http://localhost:3000/users/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      if (response.data.data.length === 1) {
        alert("Username existed");
      } else if (response.data.data.length === 0) {
        alert("User created");
      }
      console.log(response.data);
    });
  };
  return (
    <div className="register-box">
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <b>Register</b>User
        </div>
        <div className="card-body">
          <p className="login-box-msg">Register a new user</p>
          {/* <form action="../../index.html" method="post"> */}
          <div className="input-group mb-3">
            <input
              type="text"
              onChange={(e) => {
                setUsernameReg(e.target.value);
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
                setPasswordReg(e.target.value);
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
            {/* /.col */}
            <div className="col-12">
              <button
                onClick={submitRegister}
                className="btn btn-primary btn-block"
              >
                Register
              </button>
            </div>
            {/* /.col */}
          </div>
          {/* </form> */}

          <Link to="/login" className="text-center">
            I already register
          </Link>
        </div>
        {/* /.form-box */}
      </div>
      {/* /.card */}
    </div>
    /* /.register-box */
  );
}

export default Register;

import React from "react";
import { Link } from "react-router-dom";


function Register({usernameRegInput, passwordRegInput, registerUser}) {

  // const history = useHistory();
  
  return (
    <div className="register-box">
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <b>Register</b>User
        </div>
        <div className="card-body">
          <p className="login-box-msg">Register a new user</p>
          <form onSubmit={registerUser}>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={usernameRegInput}
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
                type="password"
                onChange={passwordRegInput}
                className="form-control"
                placeholder="Password"
                required
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
                <button className="btn btn-primary btn-block">Register</button>
              </div>
              {/* /.col */}
            </div>
            {/* </form> */}
          </form>
          <Link to="/" className="text-center">
            I have already registered
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

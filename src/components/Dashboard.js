import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Axios from 'axios'

function Dashboard() {
  const [usernameReg, setUsernameReg] = useState("");
  const tokens = sessionStorage.getItem('token',)
  const userToken = JSON.parse(tokens);

 
    let res = Axios.get("http://localhost:3000/users/"+userToken.token, {
     
      
    }).then((response) => {
      // console.log(response.data.data.username);
      setUsernameReg(response.data.data.username)
    });

  
  const logoutUser = () => {
    sessionStorage.clear();
    window.location.replace("http://localhost:3000/");
  };

  
  console.log(userToken)
  return (
    <div>
      <h1>Welcome {usernameReg}</h1>
      <button className="btn btn-primary" onClick={logoutUser}>Logout</button>
    </div>
  );
}

export default Dashboard;

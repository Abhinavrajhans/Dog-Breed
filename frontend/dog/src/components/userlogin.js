import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function UserLogin() {
  const navigate = useNavigate();
  const [UserLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });
  const [names, setname] = useState([]);

  const handleInput = (e) => {
    setUserLogin({ ...UserLogin, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(UserLogin, "is userlogin");
    axios
      .post("http://localhost:8000/users/login", UserLogin)
      .then((response) => {
        console.log(response, "is response");
        setname(response.data);
      });

    if (names[0] != undefined) console.log(names[0].username, "is username");

    setUserLogin({ username: "", password: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={UserLogin.username}
            onChange={handleInput}
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={UserLogin.password}
            onChange={handleInput}
            name="password"
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
      <div>
        {names[0] === undefined ? (
          <div> "undefined" </div>
        ) : (
          <div> {names[0].username} </div>
        )}
      </div>
    </div>
  );
}

export default UserLogin;

import React from "react";
import { useState } from "react";
import axios from "axios";
function Userregister() {
  const [UserRegister, setUserRegister] = useState({
    username: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const v = e.target.value;
    setUserRegister({ ...UserRegister, [name]: v });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/users", UserRegister).then((response) => {
      console.log(response);
    });
    setUserRegister({ username: "", password: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={UserRegister.username}
            onChange={handleInput}
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={UserRegister.password}
            onChange={handleInput}
            name="password"
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Userregister;

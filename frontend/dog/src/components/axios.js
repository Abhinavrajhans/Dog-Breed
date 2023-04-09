import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
function Axios() {
  const [names, setname] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/users").then((response) => {
      console.log(response);
      setname(response.data);
    });
  }, []);
  return (
    <div>
      {names.map((data) => {
        return (
          <div key={data._id}>
            <div>{data.username}</div>
            <div>{data.password}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Axios;

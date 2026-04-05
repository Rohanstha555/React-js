import React from "react";
import { useState, useContext } from "react";
import userContext from "../Context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setUserPassword] = useState("");

  const {setUser} = useContext(userContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
  };

  return (
    <div>
      <h3>Login</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setUserPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

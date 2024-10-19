import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Ensure you import from 'react-router-dom'

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // useHistory gives you access to the history instance

  const handleLogin = () => {
    // Mock user authentication
    if (username === "admin" && password === "password") {
      setUser({ username: "admin", name: "Admin User" });
      history.push("/profile"); // Use history.push to navigate
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Make sure this path is correct

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (validUser) {
      localStorage.setItem("loggedUser", email);
      navigate("/projects");
    } else {
      setError("Invalid Email or Password");
    }
  }

  return (
    <div className="container">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p className="error">{error}</p>

      <p className="link" onClick={() => navigate("/register")}>
        New User? Register
      </p>
      <p className="forgot-link" onClick={() => navigate("/forgot")}>
        Forgot Password?
      </p>
    </div>
  );
}

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
   
    if (email === "test@test.com" && password === "123456") {
      localStorage.setItem("loggedUser", email);
      navigate("/projects");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome back</h2>
        <p className="login-subtitle">Sign in to continue to your workspace</p>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Sign In
        </button>

        {error && <p className="error-msg">{error}</p>}

        <hr className="divider" />

        <div className="footer-links">
          <span onClick={() => navigate("/register")}>New user? Register</span>
          <span onClick={() => navigate("/forgot")}>Forgot password?</span>
        </div>
      </div>
    </div>
  );
}

export default Login;

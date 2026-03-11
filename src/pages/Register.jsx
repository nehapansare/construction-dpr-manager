import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== repassword) {
      setError("Passwords do not match");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((u) => u.email === email);

    if (userExists) {
      setError("User already exists");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful");
    navigate("/"); // Navigate back to login page
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create Account</h2>

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Re-enter Password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>

          <p className="error-msg">{error}</p>

          <p className="footer-links" onClick={() => navigate("/")}>
            Already have an account? Login
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;

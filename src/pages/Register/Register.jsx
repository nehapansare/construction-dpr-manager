import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      
      toast.error("Passwords do not match", { theme: "dark" });
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((u) => u.email === email);

    if (userExists) {
      setError("User already exists");
      toast.error("User already exists", { theme: "dark" });
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("✅ Registration Successful!", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });

    
    setEmail("");
    setPassword("");
    setRepassword("");
    setError("");

    
    setTimeout(() => {
      navigate("/");
    }, 1500);
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

    
      <ToastContainer />
    </div>
  );
}

export default Register;

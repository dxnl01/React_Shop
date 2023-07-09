import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const hasEmailValue = email.length > 0;
  const hasPasswordValue = password.length > 0;

  return (
    <div className="loginContent">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={`inputBox ${hasEmailValue ? "labelShifted" : ""}`}>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={`inputBox ${hasPasswordValue ? "labelShifted" : ""}`}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="btn" type="submit">Sign in</button>
        <button className="btn" type="button" onClick={navigateRegister}>
          Log on
        </button>
      </form>
    </div>
  );
}

export default Login;

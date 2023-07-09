import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Registration() {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
  };

  const hasNameValue = name.length > 0;
  const hasEmailValue = email.length > 0;
  const hasPasswordValue = password.length > 0;

  return (
    <div className="registerContent">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className={`inputBox ${hasNameValue ? "labelShifted" : ""}`}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
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
        <button className="btn" type="submit">Check in</button>
        <button className="btn" type="button" onClick={navigateLogin}>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Registration;

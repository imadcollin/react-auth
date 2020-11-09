import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Auth from "../Services/auth";
const Login = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "test" && password === "test") {

      Auth.isAuthenticated = true;
      history.push("/home");
      return <Redirect to="/home" />;

    } else history.push("/login");
    return <Redirect to="/login" />;
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          autoFocus
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import styles from "../styles/sign-up.module.css";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit() {
    event.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/users`,
      {
        username,
        password,
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    console.log(response.data);

    if (response.data.success) {
      return navigate("/login");
    } else {
      return setError(response.data.errors[0].msg);
    }
  }

  return (
    <div id="main-container">
      <h1 id="sign-up-title">Welcome to HemantDahiyaDev Blogs</h1>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <span className={styles.result_title}>{error}</span>
        <div className="username-field">
          <label htmlFor="username">Enter a username: </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength={4}
          />
        </div>

        <div className="password-field">
          <label htmlFor="password">Enter a password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={5}
          />
        </div>

        <div className="email-field">
          <label htmlFor="email">Enter an email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            minLength={5}
          />
        </div>

        <button type="submit">sign up</button>
      </form>

      <div className="login-container">
        <span>
          Already a user? Click <Link to="/login">Log in</Link>
        </span>
      </div>
    </div>
  );
}

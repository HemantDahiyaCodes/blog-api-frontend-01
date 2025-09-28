import { useState } from "react";
import "../styles/sign-up.css";
import axios from "axios";
import { Link } from "react-router";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  async function handleSubmit() {
    event.preventDefault();

    const response = await axios.post(
      "http://localhost:8000/users/sign-up",
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.notValid === "too_short") {
      return setResult(`Username ${username} is too short!`);
    }

    if (response.data.success) {
      return setResult(`Username ${username} signed up successfully`);
    } else {
      return setResult(`Username ${username} already exists`);
    }
  }

  return (
    <>
      <h1 id="my-title">Welcome to HemantDahiyaDev Blogs</h1>
      <h2>{result}</h2>
      <form onSubmit={handleSubmit}>
        <div>
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

        <div>
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

        <button type="submit">sign up</button>
      </form>

      <div className="login-container">
        <span>Already a user? Click the link to log in <Link to="/log-in">Log in</Link></span>
      </div>
    </>
  );
}
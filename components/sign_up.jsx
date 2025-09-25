import { useState } from "react";
import "../styles/sign-up.css";
import axios from "axios";

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

    console.log(response.data.userExists);

    if (response.data.userExists === undefined) {
      setResult(`${username} signed up successfully`);
    } else {
      console.log(username)
      setResult(`Username ${username} is already taken`);
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
          />
        </div>

        <div>
          <label htmlFor="password">Enter a password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">sign up</button>
      </form>
    </>
  );
}

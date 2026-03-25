import { Link, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/login-style.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit() {
    event.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/sessions`,
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        validateStatus: (status) => status < 500 // Accepts 401 status to show error to the user
      },
    );

    let token = response.data.token;
    let userId = response.data.userId;
    let user = response.data.username;
    localStorage.setItem("userId", userId);
    localStorage.setItem("username", user);
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    if (response.status === 200) {
      return navigate("/");
    }

    if (response.status === 401) {
      return setResult("Username or password is incorrect.");
    }
  }

  return (
    <div id={styles.mainContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <span id={styles.backMessage}>Welcome back.</span>
        <span className={styles.result_title}>{result}</span>
        <section>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength={5}
          />
        </section>

        <section>
          <label htmlFor="username">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={5}
          />
        </section>

        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
}

export { Login };

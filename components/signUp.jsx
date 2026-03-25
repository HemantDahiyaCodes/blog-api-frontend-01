import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import styles from "../styles/sign-up.module.css";

function SignUp() {
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

    if (response.data.success) {
      return navigate("/auth");
    } else {
      return setError(response.data.errors[0].msg);
    }
  }

  return (
    <div id={styles.mainContainer}>
      <form onSubmit={handleSubmit} className={styles.signUpForm}>
      <span id={styles.joinMessage}>Join the blog</span>
      <span className={styles.result_title}>{error}</span>
        <section>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter a username"
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength={5}
          />
        </section>

        <section>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter an email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </section>

        <section>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter a password"
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={5}
          />
        </section>

        <button type="submit">CREATE ACCOUNT</button>
      </form>
    </div>
  );
}

export { SignUp };

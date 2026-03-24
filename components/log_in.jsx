import { Link, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import "../styles/log-in.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      },
    );

    let token = response.data.token;
    let userId = response.data.userId;
    let user = response.data.username;
    localStorage.setItem("userId", userId);
    localStorage.setItem("username", user);
    localStorage.setItem("token", "Bearer " + token);
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    
    if(response.status === 200) {
      return navigate("/");
    }
  }

  return (
    <div id="main-container">
      <form onSubmit={handleSubmit} className="log-in-form">
        <div className="login-username-field">
          <label htmlFor="username">Enter your username: </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="login-password-field">
          <label htmlFor="password">Enter your password: </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit">submit</button>
      </form>

      <div className="sign-up-container">
        <span>
          Dont have an account? Click <Link to="/signup">here</Link>
        </span>
      </div>
    </div>
  );
}

export { Login };

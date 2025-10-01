import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";
import "../styles/log-in.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (result === 'Login successful') {
      navigate("/posts");
    }
  }, [result, navigate]);

  async function handleSubmit() {
    event.preventDefault();

    const response = await axios.post(
      "http://localhost:8000/users/log-in",
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

    let token = response.data.token;
    localStorage.setItem("token", "Bearer " + token);
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    if (response.data.success) {
      return setResult("Login successful");
    } else {
      return setResult("Username or password is not correct")
    }
  }

  return (
    <div id="main-container">
      <h1>{result}</h1>
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
          Dont have an account? Click <Link to="/">here</Link>
        </span>
      </div>
    </div>
  );
}

export { Login };

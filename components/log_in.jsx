import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(result) {
      navigate("/posts")
    }
  }, [result, navigate])

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
    console.log(token);
    localStorage.setItem("token", "Bearer" + token);
    axios.defaults.headers.common['Authorization'] = "Bearer" + token

    if (response.status === 200) {
      return setResult(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">submit</button>
      </form>

      <span>
        Dont have an account? Sign up by clicking <Link to="/">this link</Link>
      </span>
    </>
  );
}

export { Login };

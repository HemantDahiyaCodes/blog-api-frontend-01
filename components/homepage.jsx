import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import "../styles/homepage-style.css";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getPosts() {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/users/posts", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      setPosts(response.data.posts);
      setUser(response.data.userInReq.username);
    }
    getPosts();
  }, []);
  return (
    <>
      <div className="main-container">
      <h1 className="user-title">Welcome {user}</h1>
      <div className="posts-container">
        {posts.map((post) => {
          return (
              <div className="post-card">
                <h2 className="post-title">{post.title}</h2>
                <Link to={`/posts/${post.id}`}>View</Link>
              </div>
          );
        })}
        </div>
      </div>
    </>
  );
}

export { HomePage };

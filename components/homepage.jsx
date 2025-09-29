import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

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
      <h1>Welcome {user}</h1>
      <div>
        {posts.map((post) => {
          return (
          <Link to={`/posts/${post.id}`} key={post.id}> <div id="post">
            <p className="post-id">{post.id}</p>
            <p>{post.content}</p>
          </div>
          </Link>
          )
        })}
      </div>
    </>
  );
}

export { HomePage };

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/allPosts-style.module.css";
import { Link } from "react-router";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/posts", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setPosts(response.data.posts);
    }
    getPosts();
  }, []);

  const allPosts = posts.map((post) => {
    return (
      <div className={styles.post} key={post.id}>
        <span><Link to={`/:postId`}>{post.title}</Link></span>
        <span className={styles.post_description}>{post.description}</span>
      </div>
    );
  });

  return (
    <>
    <h1 className={styles.posts_heading}>ALL POSTS</h1>
    <div className={styles.post_container}>{allPosts}</div>
    </>
  )
}

export { AllPosts };

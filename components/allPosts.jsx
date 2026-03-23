import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/allPosts-style.module.css";
import { Link } from "react-router";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
      console.log(response.data);
      setPosts(response.data.posts);
    }
    getPosts();
  }, []);

  const allPosts = posts.map((post) => {
    return (
      <div className={styles.post} key={post.id}>
        <span>
          <Link to={`/${post.id}`}>{post.title}</Link>
        </span>
        <span className={styles.post_description}>{post.description}</span>
      </div>
    );
  });

  return (
    <>
      <h1 className={styles.posts_heading}>ALL POSTS</h1>
      <div className={styles.post_container}>{allPosts}</div>
    </>
  );
}

export { AllPosts };

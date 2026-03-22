import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "../styles/homepage-style.module.css";
import { Navbar } from "./navbar";


function HomePage() {
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
  return (
    <>
    <div className={styles.body}>
      <Navbar />
    </div>
    </>
  );
}

export { HomePage };

import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/post-style.module.css";
import { Navbar } from "./navbar";

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [postOwner, setPostOwner] = useState("");
  const [comment, setComment] = useState("");
  const [commentsArr, setCommentsArr] = useState([]);

  useEffect(() => {
    async function getPost() {
      console.log("Post Id is: ", postId);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/${postId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      setPost(response.data.post);
      setPostOwner(response.data.postOwner.username);
      setCommentsArr(response.data.post.comments);
    }
    getPost();
  }, [postId]);

  return (
    <div className={styles.post_container}>
      <Navbar />
      <div className={styles.post}>
        <div className={styles.titleAndDesc}>
        <span className={styles.post_title}>{post.title}</span>
        <span className={styles.post_description}>{post.description}</span>
        <span className={styles.post_owner}>Created by {postOwner}</span>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <p className={styles.post_content}>{post.content}</p>
      </div>
    </div>
  );
}

export { Post };

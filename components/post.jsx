import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/post-style.module.css";
import { Navbar } from "./navbar";
import { CommentModal } from "./comments";

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [postOwner, setPostOwner] = useState("");
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
      console.log(response.data);
      setPostOwner(response.data.post.author.username);
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

      <div className={styles.comments_array}>
        <h1>Comments</h1>
        {commentsArr.map((comment) => {
          return (
            <div className={styles.comment} key={comment.id}>
              <span>{comment.Username}</span>
              <span>{comment.content}</span>
            </div>
          );
        })}
      </div>

      <div className={styles.signupAndLoginModal}>
        <CommentModal />
      </div>
    </div>
  );
}

export { Post };

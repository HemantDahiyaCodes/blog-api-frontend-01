import { useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import styles from "../styles/comments-style.module.css";

function CommentModal() {
  const userId = localStorage.getItem("userId");
  const user = localStorage.getItem("username");
  const [content, setContent] = useState(null);

  const {postId} = useParams();

  async function handleSubmit(event) {
      event.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/posts/${postId}/comments`,
      {
        content
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response;
  }
    return (
      <div className={styles.CommentModal}>
        {!userId ? (
            <div className={styles.acc_links}>
            <span>Create a free account or login</span>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Login</Link>
            </div>
        ): (
            <div className={styles.commentSection}>
                <form onSubmit={handleSubmit}>
                <textarea name="content" id="comment-content" onChange={(e) => setContent(e.target.value)} rows="5" placeholder="Start typing...."></textarea>
                <span>Commenting as {user}</span>
                <button type="submit">comment</button>
            </form>
            </div>
        )}
      </div>
    );
}

export { CommentModal };

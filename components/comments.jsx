import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import axios from "axios";
import styles from "../styles/comments-style.module.css";

function CommentModal({ setCommentArr }) {
  const userId = localStorage.getItem("userId");
  const user = localStorage.getItem("username");
  const [content, setContent] = useState(null);
  const navigate = useNavigate();

  const { postId } = useParams();

  const token = localStorage.getItem("token");
  async function handleSubmit(event) {
    event.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/posts/${postId}/comments`,
      {
        content,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      },
    );

    setCommentArr((prev) => [...prev, response.data.comment]);
    setContent("");
    return response;
  }

  function handleClick() {
    const logout = localStorage.clear("userId, username, token");
    navigate("/");

    return logout;
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.CommentModal}>
        {!userId ? (
          <div className={styles.acc_links}>
            <span>
              Want to leave a comment?{" "}
              <Link to="/auth">Create a free account or login</Link> to join the
              conversation
            </span>
          </div>
        ) : (
          <div className={styles.commentSection}>
            <form onSubmit={handleSubmit}>
              <span className={styles.comment_user}>
                Commenting as{" "}
                <span className={styles.comment_username}>{user}</span>
              </span>
              <textarea
                name="content"
                id="comment-content"
                onChange={(e) => setContent(e.target.value)}
                rows="5"
                placeholder="Start typing...."
              ></textarea>
              <div className={styles.submitButtons}>
                <button type="submit" className={styles.submit}>comment</button>
                <button type="button" onClick={handleClick}>
                  Logout
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export { CommentModal };

import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import axios from "axios";
import styles from "../styles/comments-style.module.css";

function CommentModal({setCommentArr}) {
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

    setCommentArr(prev => [...prev, response.data.comment]);
    setContent('');
    return response;
  }

  function handleClick() {
    const logout = localStorage.clear("userId, username, token");
    navigate("/");

    return logout;
  }
  return (
    <div className={styles.CommentModal}>
      {!userId ? (
        <div className={styles.acc_links}>
          <span>Create a free account or login<Link to="/auth">here</Link></span>
        </div>
      ) : (
        <div className={styles.commentSection}>
          <form onSubmit={handleSubmit}>
            <textarea
              name="content"
              id="comment-content"
              onChange={(e) => setContent(e.target.value)}
              rows="5"
              placeholder="Start typing...."
            ></textarea>
            <span>Commenting as {user}</span>
            <button type="submit">comment</button>
            <button type="button" onClick={handleClick}>Logout</button>
          </form>
        </div>
      )}
    </div>
  );
}

export { CommentModal };

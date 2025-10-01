import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/post-style.css";

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");
  const [commentsArr, setCommentsArr] = useState([]);

  useEffect(() => {
    async function getPost() {
      const token = localStorage.getItem("token");
      console.log("Post Id is: ", postId);
      const response = await axios.get(
        `http://localhost:8000/users/posts/${postId}`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setPost(response.data.post);
      setCommentsArr(response.data.post.comments);
    }
    getPost();
  }, [postId]);

  async function handleSubmit() {
    event.preventDefault();

    const token = localStorage.getItem("token");
    const response = await axios.post(
      `http://localhost:8000/users/posts/${postId}/comment`,
      {
        comment,
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    location.reload(); // Reloads the page after submitting a comment
  }

  return (
    <div id="post">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-content">{post.content}</div>

      <div className="comment-section">
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment">Leave a comment: </label>
          <textarea
            name="comment"
            id="comment"
            rows={5}
            cols={30}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit">submit</button>
        </form>
      </div>

      <div className="post-title">Comments:</div>
      <div>
        {commentsArr.map((comment) => {
          return (
            <div className="comment" key={comment.id}>
              <span className="username-bold">
                {comment.username} commented:
              </span>{" "}
              <span className="comment-content"> {comment.content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { Post };

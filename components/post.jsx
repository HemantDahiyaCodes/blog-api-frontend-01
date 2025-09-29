import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

function Post() {
  const { postId } = useParams();
  const [result, setResult] = useState({});
  const [comment, setComment] = useState("");
  const [commentsArr, setCommentsArr] = useState([]);

  useEffect(() => {
    async function getPost() {
      const token = localStorage.getItem("token");
      console.log("Post Id is: ", postId)
      const response = await axios.get(
        `http://localhost:8000/users/posts/${postId}`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response)
      setResult(response.data.post);
      setCommentsArr(response.data.post.comments);
    }
    getPost();
  }, [postId]);

  async function handleSubmit() {
    event.preventDefault();

    const token = localStorage.getItem("token");
    const response = await axios.post(
      `http://localhost:8000/users/posts/${postId}/comment`, {
        comment
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
    <h1>{result.title}</h1>
      <h1>{result.content}</h1>
      <div>{commentsArr.map((comment) => {
        return (
        <h3 key={comment.id}>{comment.username} commented: {comment.content}</h3>
        )
      })}</div>
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
    </div>
  );
}

export { Post };

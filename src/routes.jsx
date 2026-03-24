import { HomePage } from "../components/homepage";
import { Post } from "../components/post";
import { SignUpAndLogin } from "../components/signAndLogin";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <SignUpAndLogin />,
  }, 
  {
    path: "/:postId",
    element: <Post />
  }
];

export default routes;
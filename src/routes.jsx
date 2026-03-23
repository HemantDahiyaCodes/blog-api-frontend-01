import { SignUp } from "../components/sign_up";
import { Login } from "../components/log_in";
import { HomePage } from "../components/homepage";
import { Post } from "../components/post";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />
  }, 
  {
    path: "/:postId",
    element: <Post />
  }
];

export default routes;
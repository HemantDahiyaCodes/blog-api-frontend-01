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
    path: "/log-in",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />
  }, 
  {
    path: "/posts/:postId",
    element: <Post />
  }
];

export default routes;
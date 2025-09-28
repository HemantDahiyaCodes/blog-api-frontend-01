import { SignUp } from "../components/sign_up";
import { Login } from "../components/log_in";
import { HomePage } from "../components/homepage";

const routes = [
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/log-in",
    element: <Login />,
  },
  {
    path: "/posts",
    element: <HomePage />
  }
];

export default routes;
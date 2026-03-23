import { Link } from "react-router";
import styles from "../styles/navbar-style.module.css";
import { AllPosts } from "./allPosts";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        {" "}
        <span>//</span> Hemant Codes
      </Link>
      <ul>
        <li>
          <Link to="/">POSTS</Link>
        </li>
        <li>
          <a href="#" rel="noopener noreferrer">
            X
          </a>
        </li>
        <li>
          <a
            href="https://github.com/HemantDahiyaCodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };

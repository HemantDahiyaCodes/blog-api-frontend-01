import { Link } from "react-router";
import styles from "../styles/navbar-style.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/homepage">
        {" "}
        <span>//</span> Hemant Codes
      </Link>
      <ul>
        <li>
          <a href="#" rel="noopener noreferrer">
            POSTS
          </a>
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

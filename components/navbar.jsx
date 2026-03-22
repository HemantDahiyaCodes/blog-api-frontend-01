import { Link } from "react-router";
import styles from "../styles/navbar-style.module.css";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className={styles.nav}>
            <Link to="/homepage"> <span>//</span> Hemant Codes</Link>
            <ul>
                <li>POSTS</li>
                <li>PROJECTS</li>
                <li>GITHUB</li>
            </ul>
        </nav>
    )
}

export {Navbar};
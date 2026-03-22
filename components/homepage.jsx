import styles from "../styles/homepage-style.module.css";
import { Navbar } from "./navbar";
import {MyIntroduction} from "./myIntroduction";
import { AllPosts } from "./allPosts";
import { AboutMe } from "./about-me";

function HomePage() {
  return (
    <>
      <div className={styles.body}>
        <Navbar />
        <MyIntroduction />
        <AllPosts />
        <AboutMe />
      </div>
    </>
  );
}

export { HomePage };
import styles from "../styles/about-me-style.module.css";

function AboutMe() {
  return (
    <div className={styles.introAndSkillsContainer}>
      <div className={styles.introContainer}>
        <div className={styles.avatarContainer}>
          <img src="/hemant_avatar.jpg" alt="" />
        </div>
        <div className={styles.HeadAndDesc}>
          <span className={styles.name_heading}>Hemant Dahiya</span>
          <p className={styles.intro}>
            Self-taught full stack dev from India. Building in public, writing
            about what I learn. Currently working on a real-time messaging app
            and a blog API. Find me on{" "}
            <a
              href="https://x.com/Hemant_codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>{" "}
            or{" "}
            <a
              href="https://github.com/HemantDahiyaCodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub.
            </a>
          </p>
        </div>
      </div>

      <div className={styles.skillsContainer}>
        <div className={styles.stackHeading}>Stack</div>
        <div className={styles.skills}>
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>Postgresql</span>
          <span>Prisma</span>
          <span>Typescript</span>
          <span>Tailwind</span>
          <span>Jest</span>
        </div>
      </div>
    </div>
  );
}

export { AboutMe };

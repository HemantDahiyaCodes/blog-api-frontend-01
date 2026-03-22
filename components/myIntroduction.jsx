import styles from "../styles/my_intro.module.css";

function MyIntroduction() {
    return (
        <div className={styles.intro_container}>
            <div className={styles.title_country}>
                <span>Full Stack Developer</span><span className={styles.divider}>|</span><span>India</span>
            </div>

            <div className={styles.oneLiner}>
                <span>building things on the <span className={styles.web_color}>web.</span></span>
            </div>

            <div className={styles.short_goal}>
                <span>Self-taught developer writing about real problems, real bugs, and the messy process of building software that works.</span>
            </div>
            <hr />
            <div>
                <span></span>
            </div>
        </div>
    )
}

export {MyIntroduction};
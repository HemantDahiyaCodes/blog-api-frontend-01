import { useState } from "react";
import { Navbar } from "./navbar";
import styles from "../styles/signAndLogin.module.css";
import { SignUp } from "./signUp";
import { Login } from "./Login";

function SignUpAndLogin() {
  const [active, setIsActive] = useState("signup");

  function handleClick(changeComponent) {
    setIsActive(changeComponent);
  }

  return (
    <div className={styles.main_container}>
      <Navbar />

      <nav className={styles.auth_nav}>
        <button type="button" onClick={() => handleClick("login")} className={active === "login" ? styles.active : styles.inactive}>
          // LOGIN
        </button>
        <button
          type="button"
          onClick={() => handleClick("signup")} className={active === "signup" ? styles.active : styles.inactive}
        >
          // SIGN UP
        </button>
      </nav>

      <div className={styles.formContainer}>
        {active === "signup" ? <SignUp /> : <Login />}
      </div>
    </div>
  );
}

export { SignUpAndLogin };

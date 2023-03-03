import React from "react";
import styles from "./auth.module.scss";
import registerImg from "../../assets/register.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="password" required />
            <input type="password" placeholder="confirm password" required />
            <button className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <span className={styles.register}>
            <p>Already own an Account?</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={registerImg} alt="register" width="400" />
      </div>
    </section>
  );
};

export default Register;

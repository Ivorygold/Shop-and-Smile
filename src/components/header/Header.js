import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { BsCart4 } from "react-icons/bs";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        <span>Shop</span>&<span>Smile</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <BsCart4 size={20} />
      <p>0</p>
    </Link>
  </span>
);

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/order-history">My Order</Link>
            </span>
            {cart}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

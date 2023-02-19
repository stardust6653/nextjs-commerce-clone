import Link from "next/link";
import React from "react";
import styles from "../../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        width: "80%",
        height: "40px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <ul style={{ display: "flex" }}>
        <Link href="/" style={{ color: "white" }}>
          <li className={styles.navItem}>Home</li>
        </Link>
        |
        <Link href="/about">
          <li className={styles.navItem} style={{ color: "white" }}>
            About
          </li>
        </Link>
        |
        <Link href="/wish">
          <li className={styles.navItem} style={{ color: "white" }}>
            Wish
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

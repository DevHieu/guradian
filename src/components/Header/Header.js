import React from "react";
import styles from "./Header.module.scss";

import Banner from "./Banner/Banner.js";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <Banner />
    </div>
  );
}

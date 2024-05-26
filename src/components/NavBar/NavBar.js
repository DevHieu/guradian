import React from "react";
import styles from "./Navbar.module.scss";
import logo from "../../img/logo.png";

export default function NavBar() {
  const logoClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <img
          src={logo}
          alt="logo"
          className={styles.logo}
          onClick={logoClick}
        />
        <ul className={styles.list}>
          <li className={`${styles.Itemlist} ${styles.active}`}>Cốt truyện</li>
          <li className={styles.Itemlist}>Tin tức</li>
          <li className={styles.Itemlist}>Cơ chế game</li>
          <li className={styles.Itemlist}>Cẩm nang ness</li>
          <li className={styles.Itemlist}>Về chúng tôi</li>
        </ul>
      </div>
      <div className={styles.empty}></div>
    </div>
  );
}

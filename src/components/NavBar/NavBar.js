import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../img/logo.png";
import { MdAccountCircle } from "react-icons/md";

export default function NavBar() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <ul className={styles.list}>
          <li className={`${styles.Itemlist} ${styles.active}`}>Cốt truyện</li>
          <li className={styles.Itemlist}>Tin tức</li>
          <li className={styles.Itemlist}>Cơ chế game</li>
          <li className={styles.Itemlist}>Cẩm nang ness</li>
          <li className={styles.Itemlist}>Về chúng tôi</li>
        </ul>
        <div className={styles.right}>
          <div className={styles.signin}>
            <p className={styles.text}>Đăng nhập</p>
            <MdAccountCircle size={40} />
          </div>
          <div className={styles.download}>Tải Game</div>
        </div>
      </div>
      <div className={styles.empty}></div>
    </div>
  );
}

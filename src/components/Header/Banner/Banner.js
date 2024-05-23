// import { useState, useEffect } from "react";
import BannerUrl from "../../../img/banner.jpg";
import GameLogo from "../../../img/logo.png";
import styles from "./Banner.module.scss";
import { FaArrowDown } from "react-icons/fa";

export default function Banner() {
  const ScroolBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrapper}>
      <img src={BannerUrl} alt="banner" className={styles.img} />
      <img src={GameLogo} alt="logo" className={styles.logo} />
      <FaArrowDown className={styles.BottomBtn} onClick={ScroolBottom} />
    </div>
  );
}

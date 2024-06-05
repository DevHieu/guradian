// import { useState, useEffect } from "react";
import BannerUrl from "../../../img/banner.png";
import GameLogo from "../../../img/MainTitle.png";
import arrow from "../../../img/ArrowScrollDown.png";
// import button1 from "../../../img/Button1.png";
import PlayBtn from "../../../img/PlayBtn.png";

import styles from "./Banner.module.scss";
// import { FaArrowDown } from "react-icons/fa";

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
      <div className={styles.LogoContainer}>
        <img src={GameLogo} alt="logo" className={styles.logo} />
      </div>
      <p>PHIÊN BẢN ĐẦU TIÊN ĐÃ MỞ</p>
      <div className={styles.downloads}>
        <div className={styles.downloadBtn}>
          <p>TẢI GÓI PC</p>
        </div>
        <a
          href="https://www.youtube.com/watch?v=nwuW98yLsgY&t=6s"
          target="_blank"
          rel="noreferrer"
        >
          <img src={PlayBtn} alt="play" className="" />
        </a>
        <div className={styles.downloadBtn}>
          <p>TẢI XUỐNG KHÁC</p>
        </div>
      </div>
      <button className={styles.BottomBtn} onClick={ScroolBottom}>
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
}

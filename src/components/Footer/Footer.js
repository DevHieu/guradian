import React from "react";
import styles from "./Footer.module.scss";
import GameLogo from "../../img/logo.png";
import Warning from "../../img/ESRB_Adults_Only_18+.png";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <img src={GameLogo} alt="logo" className={styles.logo} />
      <div>
        <a
          href="https://mbasic.facebook.com/privacy/policy/printable/"
          target="_blank"
          rel="noreferrer"
        >
          target="_blank" rel="noreferrer" Chính sách về quyền riêng tư
        </a>
        <a
          href="https://www.facebook.com/terms.php"
          target="_blank"
          rel="noreferrer"
        >
          Điều khoản dịch vụ
        </a>
        <a href="https://google.com/" target="_blank" rel="noreferrer">
          Giới thiệu công ty
        </a>
      </div>
      <div className={styles.Companies}>
        <img src={Warning} alt="logo" className={styles.warning} />
      </div>
    </div>
  );
}

import React from "react";
import styles from "./Footer.module.scss";
import GameLogo from "../../img/logo.png";
import company from "../../img/CompanyLogo.png";
import Warning from "../../img/ESRB_Adults_Only_18+.png";
import { Link } from "react-router-dom";

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
          Chính sách về quyền riêng tư
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
        <img src={Warning} alt="warning" className={styles.warning} />
      </div>
      <span>Chơi game quá 180 phút sẽ gây ảnh hưởng đến sức khỏe</span>
      <span>Người chịu trách nhiệm nội dung: Ông Bùi Nguyễn Mạnh Hùng</span>
      <span>
        Công Viên Phần mềm Quang Trung Toà nhà GenPacific, Lô 3 đường 16, Trung
        Mỹ Tây, Quận 12, Hồ Chí Minh
      </span>
      <span>
        "PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered
        trademarks or trademarks of Sony Interactive Entertainment Inc.
      </span>
      <span>
        Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic
        Online Services are trademarks and/or registered trademarks of Epic
        Games. All other trademarks are the property of their respective owners.
        <Link to="/admin" className={styles.admin}>
          for admin
        </Link>
      </span>

      <img src={company} alt="company's logo" className={styles.company} />
    </div>
  );
}

import React from "react";
import star from "../../img/ListStyle.png";
import styles from "./index.module.scss";

export default function index({ text }) {
  return (
    <div className={styles.list_items}>
      <div>
        <img src={star} alt="dots" className={styles.marker} />
      </div>
      <span>{text}</span>
    </div>
  );
}

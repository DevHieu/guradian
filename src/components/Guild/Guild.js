import React from "react";
import ListItems from "../ListItems";
import styles from "./Guild.module.scss";
import background from "../../img/ForestBackground.png";
import border from "../../img/CircleBorder.png";
import monster from "../../img/monster.png";
import BottomDecor2 from "../../img/BottomDecor2.png";

export default function Guild() {
  return (
    <div className={styles.wrapper}>
      <img src={background} alt="background" className={styles.background} />
      <div className={styles.left}>
        <div className={styles.contentContainer}>
          <img src={border} alt="border" className={styles.border} />
          <img src={monster} alt="monster" className={styles.monster} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.items}>
          <div className={styles.BoxItems}></div>
          <div className={styles.BoxItems}></div>
          <div className={styles.BoxItems}></div>
        </div>
        <div className={styles.describe}>
          <ListItems text="Tên là Cua Kì Cục" />
          <ListItems text="Có hai Cua Kì Cục trên bản đồ, với một con được tìm thấy trong mỗi bên của sông." />
        </div>
        <img src={BottomDecor2} alt="decor" className={styles.decor} />
      </div>
    </div>
  );
}

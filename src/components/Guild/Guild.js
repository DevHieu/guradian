import React from "react";
import ListItems from "../ListItems";
import styles from "./Guild.module.scss";
import background from "../../img/ForestBackground.png";
import border from "../../img/CircleBorder.png";
import kaiyuu from "../../img/Monster/kaiyuu.png";
import pangolin from "../../img/Monster/pangolin.png";
import robot from "../../img/Monster/Arms-robot.png";
import BottomDecor2 from "../../img/BottomDecor2.png";

export default function Guild() {
  return (
    <div className={styles.wrapper}>
      <img src={background} alt="background" className={styles.background} />
      <div className={styles.left}>
        <div className={styles.contentContainer}>
          <img src={border} alt="border" className={styles.border} />
          <img src={robot} alt="monster" className={styles.monster} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.items}>
          <div className={styles.BoxItems}>
            <img src={kaiyuu} alt="kaiyuu" />
          </div>

          <div className={styles.BoxItems}>
            <img src={pangolin} alt="kaiyuu" />
          </div>

          <div className={styles.BoxItems}>
            <img src={robot} alt="kaiyuu" />
          </div>
        </div>
        <div className={styles.describe}>
          <ListItems text="Tên: Scorpion Hand Machine" />
          <ListItems text="Là robot chiến đấu từ thời kì xa xưa kết hợp giữa sự linh hoạt của tay và đuôi của bò cạp" />
          <ListItems text="Robot chạy bằng nguồn mana sau lưng, phần đuôi là dao titanium có thể tiết ra chất độc" />
        </div>
        <img src={BottomDecor2} alt="decor" className={styles.decor} />
      </div>
    </div>
  );
}

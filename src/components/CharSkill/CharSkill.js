import React from "react";
import styles from "./CharSkill.module.scss";
import ListItems from "../ListItems";

import background from "../../img/CloundBackground.png";
import SkillBorder from "../../img/SkillBorder.png";
import char from "../../img/rick.jpg";
import bottomDecor from "../../img/BottomDecor.png";
import star from "../../img/ListStyle.png";

export default function CharSkill() {
  return (
    <div className={styles.wrapper}>
      <img src={background} alt="background" className={styles.background} />
      <img
        src={SkillBorder}
        alt="background"
        className={`${styles.background} ${styles.skillBorder}`}
      />
      <div className={styles.left}>
        <img src={char} alt="Rick Astley" className={styles.Char} />
        <img src={bottomDecor} alt="bottomDecor" className={styles.decor} />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
        </div>
        <div className={styles.bottom}>
          <ul className={styles.list}>
            <ListItems text="Game hơi dễ" />
            <ListItems text="Đồ họa như free fire" />
            <ListItems text="Âm thanh như nhạc năm 80s" />
          </ul>
        </div>
      </div>
    </div>
  );
}

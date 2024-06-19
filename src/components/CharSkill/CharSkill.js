import React from "react";
import styles from "./CharSkill.module.scss";
import ListItems from "../ListItems";

import background from "../../img/CloundBackground.png";
import SkillBorder from "../../img/SkillBorder.png";
import bottomDecor from "../../img/BottomDecor.png";
import nv1 from "../../img/Characters/nv1.png";
import skin0 from "../../img/Characters/skin0.png";
import skin1 from "../../img/Characters/skin1.png";
import skin2 from "../../img/Characters/skin2.png";
import skin3 from "../../img/Characters/skin3.png";
import skin4 from "../../img/Characters/skin4.png";

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
        <img src={nv1} alt="Rick Astley" className={styles.Char} />
        <img src={bottomDecor} alt="bottomDecor" className={styles.decor} />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.item}>
            <img src={skin0} alt="skin0" />
          </div>
          <div className={styles.item}>
            <img src={skin1} alt="skin1" />
          </div>
          <div className={styles.item}>
            <img src={skin2} alt="skin2" />
          </div>
          <div className={styles.item}>
            <img src={skin3} alt="skin3" />
          </div>
          <div className={styles.item}>
            <img src={skin4} alt="skin4" />
          </div>
        </div>
        <div className={styles.bottom}>
          <ul className={styles.list}>
            <ListItems text="Skin mặc định của nhân vật" />
          </ul>
        </div>
      </div>
    </div>
  );
}

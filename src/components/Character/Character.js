import React, { useState } from "react";
import styles from "./Character.module.scss";
import DefaultSkin from "../../img/Classic_Outfit.jpg";
import Skin1 from "../../img/Skin_Outfit.jpg";
import { AiFillSkin } from "react-icons/ai";
import { GiCrossedSwords } from "react-icons/gi";

import sword from "../../img/Twin_Daggers_Icon.png";
import whips from "../../img/Electric_Whip_Icon.png";
import frost from "../../img/Frost_Blast_Icon.png";
import shield from "../../img/Assault_Shield_Icon.png";

export default function Character() {
  const [detail, setDetail] = useState(0);
  const [currentSkin, setCurrentSkin] = useState(0);

  const SkinData = [
    { id: 0, src: DefaultSkin },
    { id: 1, src: Skin1 },
  ];

  const DetailsData = [
    { id: 0, text: "this is a nice sword, i think" },
    { id: 1, text: "this is the best weapons in this game" },
    { id: 2, text: "that's cold" },
    { id: 3, text: "umhhh, nah" },
  ];

  const changeSkin = () => {
    if (currentSkin !== SkinData.length - 1) {
      setCurrentSkin(currentSkin + 1);
    } else {
      setCurrentSkin(0);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <img
          className={styles.image}
          src={SkinData[currentSkin].src}
          alt="character"
        />
        <div className={styles.selects}>
          <div className={styles.skins}>
            <GiCrossedSwords />
          </div>
          <div onClick={changeSkin} className={styles.skins}>
            <AiFillSkin />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.skills}>
          <div>
            <img src={sword} alt="sword" />
          </div>
          <div>
            <img src={whips} alt="whips" />
          </div>
          <div>
            <img src={frost} alt="frost" />
          </div>
          <div>
            <img src={shield} alt="shield" />
          </div>
        </div>
        <div className={styles.description}>
          <div>
            <p>
              <span>Description:</span>
              {DetailsData[detail].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

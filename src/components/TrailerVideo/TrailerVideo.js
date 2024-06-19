import React from "react";
import YouTube from "react-youtube";
import styles from "./TrailerVideo.module.scss";
import MonsterBackground from "../../img/MonsterBackground.png";
import Border from "../../img/VideoBorder.png";

export default function TrailerVideo() {
  const opts = {
    height: "450",
    width: "800",
  };

  return (
    <div className={styles.wrapper}>
      <img
        src={MonsterBackground}
        alt="background"
        className={styles.background}
      />
      <img src={Border} alt="border" />
      <YouTube videoId="u4dVrvreos8" opts={opts} />
    </div>
  );
}

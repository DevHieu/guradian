import React from "react";
import YouTube from "react-youtube";
import styles from "./TrailerVideo.module.scss";
import MonsterBackground from "../../img/MonsterBackground.png";
import Border from "../../img/VideoBorder.png";
import SideBorder from "../../img/SideBorder.png";

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
      <img src={SideBorder} alt="side-border" />
      <YouTube videoId="dQw4w9WgXcQ" opts={opts} />
    </div>
  );
}

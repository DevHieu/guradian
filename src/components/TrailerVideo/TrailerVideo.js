import React from "react";
import YouTube from "react-youtube";
import styles from "./TrailerVideo.module.scss";

export default function TrailerVideo() {
  const opts = {
    height: "450",
    width: "800",
  };

  return (
    <div className={styles.wrapper}>
      <h1>GAME TRAILER</h1>
      <YouTube videoId="dQw4w9WgXcQ" opts={opts} />
    </div>
  );
}

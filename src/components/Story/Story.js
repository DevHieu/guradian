import React from "react";
import styles from "./Story.module.scss";
import background from "../../img/TowerBackground.png";
import PicsBorder from "../../img/PicsBorder.png";
import RightDecor from "../../img/RightDecor.png";

export default function Story() {
  return (
    <div className={styles.wrapper}>
      <img src={background} alt="background" className={styles.background} />
      <img src={PicsBorder} alt="border" className={styles.border} />
      <div className={styles.left}>
        <p className={styles.title}>"GURADIAN không có hai sinh mệnh"</p>
        <img src={background} alt="img" className={styles.image} />
      </div>
      <div className={styles.right}>
        <span>
          Câu nói mà người người đặt cho họ, vì họ bất tử khi chiếc "nôi" sinh
          mệnh còn tồn tại, họ không phân rã khi chết đi, linh hồn họ không tan
          biến như con người.
          <br /> Một ngày nọ, chiến tranh xảy ra, những GURADIAN và QK human vì
          một lý do mà tàn sát lẫn nhau, kéo theo cả nhưng chủng loài khác,
          những chiếc nôi sinh mệnh bị sụp đổ, mọi thứ kết thúc để lại một nơi
          hoang tàn đổ nát, không có nơi nào mà không đẫm máu, và đó là lần đầu
          tiên GURADIAN thật sự đã chết.
        </span>
        <img src={RightDecor} alt="decor" className={styles.decor} />
      </div>
    </div>
  );
}

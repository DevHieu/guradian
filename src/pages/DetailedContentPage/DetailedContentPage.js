import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar.js";
import axios from "axios";
import styles from "./DetailedContentPage.module.scss";

export default function DetailedContentPage() {
  const queryParameters = new URLSearchParams(window.location.search);
  const [data, setData] = useState([]);
  const id = queryParameters.get("id");
  const part = queryParameters.get("part");
  // const [reqId, setReqId] = useState(1);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:5000";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await axios
          .get(url + "/getdetail/" + part + "/" + id)
          .then((response) => {
            setData(response.data.data);
          });
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NavBar />
      {loading ? (
        <div className={styles.loadingWrapper}>
          <div className={styles.pacman} />
          <p className={styles.loading}>LOADING</p>
        </div>
      ) : (
        <div>
          <img src={data.img} alt="nice" />
          <p>{data.content}</p>
        </div>
      )}
    </div>
  );
}

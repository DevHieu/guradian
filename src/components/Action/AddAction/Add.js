import React, { useState } from "react";
import axios from "axios";
import styles from "./Add.module.scss";

export default function Add() {
  const [position, setPosition] = useState(0);
  const [part, setPart] = useState("story");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const Server_URL = process.env.REACT_APP_SER_URL;
  //Convert img to base64 string to stored image in database
  const converBase64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result.toString());
    };

    reader.readAsDataURL(file);
  };

  const upload = async () => {
    const url = Server_URL;
    const data = {
      part: part,
      position: position,
      content: content,
      image: image,
    };

    await axios.post(url + "/upload", data).catch((er) => console.log(er));
    await alert("Add complete");
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <span>which part? </span>
        <select name="choose" onChange={(e) => setPart(e.target.value)}>
          <option value="story">Story</option>
          <option value="description">Description</option>
          <option value="character">Character</option>
          <option value="guild">Guild</option>
        </select>
      </div>
      <div>
        <span>position : </span>
        <input
          type="number"
          name="position"
          min={1}
          onInput={(e) => {
            setPosition(e.target.value);
          }}
        />
      </div>
      <div>
        <span>content: </span>
        <input type="text" onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <input name="image" type="file" onChange={(e) => converBase64(e)} />
        <label htmlFor="upload-button">
          {Image ? (
            <img src={image} alt="dummy" width="400" className="my-10 mx-5" />
          ) : (
            <>
              <p className="text-white text-1xl text-left w-full text-left">
                Upload Image
              </p>
              <div className={styles.wrapper} />
            </>
          )}
        </label>
      </div>
      <button type="button" onClick={upload} className={styles.summit}>
        Submit
      </button>
    </div>
  );
}

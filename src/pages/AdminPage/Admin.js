import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar.js";
import styles from "./admin.module.scss";
import Add from "../../components/Action/AddAction/Add.js";
import Delete from "../../components/Action/DeleteAction/Delete.js";
import Edit from "../../components/Action/EditAction/Edit.js";

export default function Admin() {
  const [currentLayout, setCurrentLayout] = useState(
    <span>Choose 1 action</span>
  );

  return (
    <div>
      <NavBar />
      <div>
        <button
          className={styles.button}
          onClick={() => {
            setCurrentLayout(<Add />);
          }}
        >
          Add
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setCurrentLayout(<Delete />);
          }}
        >
          Delete
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setCurrentLayout(<Edit />);
          }}
        >
          Edit
        </button>
      </div>
      <div className={styles.actionWrapper}>{currentLayout}</div>
    </div>
  );
}

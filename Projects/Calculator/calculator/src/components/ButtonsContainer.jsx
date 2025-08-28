import React from "react";
import styles from "./ButtonsContainer.module.css";

function ButtonsContainer() {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttons_container}>
      {buttonNames.map((value) => (
        <button className={styles.button}>{value}</button>
      ))}
    </div>
  );
}

export default ButtonsContainer;

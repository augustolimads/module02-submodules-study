import React from "react";
import style from "./style.module.css";

export const Module02 = ({ test }) => {
  return (
    <div className={style.card}>
      <h1>MODULE 02</h1>
      {test}
    </div>
  );
};

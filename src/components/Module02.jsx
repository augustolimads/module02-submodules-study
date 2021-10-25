import React from "react";
import { Display } from "../../../module03-submodules-study/src/components/Display";
import style from "./style.module.css";

export const Module02 = ({ test }) => {
  return (
    <div className={style.card}>
      <h1>MODULE 02</h1>
      <Display counter={1} />
      {test}
    </div>
  );
};

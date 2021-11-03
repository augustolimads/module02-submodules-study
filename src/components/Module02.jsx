import React from "react";
import { Display } from "../../../module03-submodules-study/src/components/Display";
// import style from "./style.module.css";

export const Module02 = ({ counter, test }) => {
  return (
    <div className="card">
      <h1>MODULE 02</h1>
      <Display counter={counter} />
      {test}
    </div>
  );
};

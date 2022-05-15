import React from "react";
import s from "./OurPartners.module.css";

const OurPartners = () => {
  return (
    <div>
      <div className={s.container}>
        <h1 className={s.title}>Наши партнеры</h1>
        <hr />
        <div className={s.blocks}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;

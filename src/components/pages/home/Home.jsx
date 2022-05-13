import React from "react";
import s from "./home.module.css";
import search from "../../../assets/search.png";

const Home = () => {
  return (
    <div className={s.navl}>
      <nav className={s.navlink}>
        <div className={s.nav_block}>
          <a href="#">производители</a>
        </div>
        <div className={s.nav_block}>
          <a href="#">промышленная карта</a>
        </div>
        <div className={s.nav_block}>
          <a href="#">для заказчиков</a>
        </div>
        <div className={s.nav_block}>
          <a href="#">ЭКО-компании</a>
        </div>
        <div>
          <a href="#">о нас</a>
        </div>
      </nav>

      <div className={s.search}>
        <input className={s.search_inp} placeholder="ПОИСК" type="text"></input>
        <button className={s.search_blocks}>
          <img src={search} alt="ok" />
        </button>
      </div>
    </div>
  );
};

export default Home;

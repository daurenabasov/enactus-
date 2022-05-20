import React, { useState } from "react";
import s from "./home.module.css";
import search from "../../../assets/search.png";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

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

      <button onClick={}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>

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

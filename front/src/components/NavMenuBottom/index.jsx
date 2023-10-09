import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";

export default function NavMenuBottom() {
  return (
    <div className={s.container}>
      <div className={s.navMenu}>
      <div className={s.links}>
        <Link to="/">
          <img src="/media/mainPageicon.svg" alt="" className={s.main} />
        </Link>
        <Link to="/products">
          <img src="/media/shop_bag.svg" alt="" className={s.main} />
        </Link>
        <Link to="/sales">
          <img src="/media/sale.svg" alt="" className={s.main} />
        </Link>
        <Link to="/cart">
          <img src="/mainPage/cart.png" alt="" className={s.main} />
        </Link>
      </div>
      </div>
    </div>
  );
}


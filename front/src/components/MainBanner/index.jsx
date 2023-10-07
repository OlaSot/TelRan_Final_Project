import React from "react";
import { Link } from "react-router-dom";
import s from './index.module.css'

export default function MainBanner() {
  return (
    
      <div className={s.sale_container}>
        <div className={s.image_sale_block}>
          <img src="/mainPage/sale_block.png" alt="" className={s.image_sale} />
          <div className={s.text}>
            <h2>New season</h2>
            <h1>Gardening</h1>
            <Link to={"/sales"} className={s.links}>
              <div className={s.sale_btn}>Sale</div>
            </Link>
          </div>
        </div>
      </div>
    
  );
}

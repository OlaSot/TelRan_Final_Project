import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import Btn from "../Btn";


export default function NavMenu() {

  return (
    <div className={`${s.main_container} `}>

      <Link to='/'><img src="/mainpage/logo.png" alt="logo" className={s.logo} /></Link>
      {/* <button onClick={() => dispatch(changeThemeAction())}>Click</button> */}
      <div className={s.container}>
      <Link to="/categories"><Btn>Catalog</Btn></Link>
        
        <div className={`${s.links} `}>
          <Link to="/">Main Page</Link>
          <Link to="/products">All products</Link>
          <Link to="/sales">All sales</Link>
        </div>
        <Link to="/cart">
          <img className={s.cart_img}
            src="/Mainpage/cart.png"
            alt="shop_bag"
           
          />
        </Link>
      </div>
    </div>
  );
}

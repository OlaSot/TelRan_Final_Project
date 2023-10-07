import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";


export default function NavMenuBottom() {
  return (
    <div className={s.container}>
      <Link to="/">
        <img src="/media/mainPageicon.svg" alt="" className={s.main}/>
      </Link>
      <Link to="/products">All products</Link>
      <Link to="/sales">All sales</Link>
      <Link to='/cart'>Cart</Link>
    </div>
  );
}

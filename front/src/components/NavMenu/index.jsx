import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeThemeAction } from '../../store/reducers/themeReducer';
import '../../dark_theme.css'

export default function NavMenu() {

  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.value);
  const themeClass = theme === 'dark' ? 'dark_theme' : '';
  return (
    
    <div className={`${s.main_container} ${themeClass}`}>
      <img src="/mainpage/logo.png" alt="logo" className={s.logo} />
      <button onClick={() => dispatch(changeThemeAction())}>Click</button>
      <div className={s.container}>
          <Link to='/categories' className={s.links}>
            <div className={`${s.btn_catalog} ${theme === 'dark' ? 'dark_theme' : ''}`}>
              <p>Catalog</p>
            </div>
          </Link>
        <div className={`${s.links} ${theme === 'dark' ? 'dark_theme' : ''}`}>
          <Link to='/'>Main Page</Link>
          <Link to='/products'>All products</Link>
          <Link to='/sales'>All sales</Link>
        </div>
      </div>
      <Link to='/cart'><img src='/Mainpage/cart.png' alt='shop_bag' style={{ width: '50px', height: '50px' }} /></Link>
    </div>
  )
}

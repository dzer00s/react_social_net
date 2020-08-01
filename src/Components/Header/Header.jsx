import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.img_icon}>
        <img src="https://ekb.toshiba-official-servis.ru/assets/templates/img/arrow.png" alt='logo'></img>
        <div className={s.login}>
        {props.isAuth ? props.login : <NavLink to={'/login'} >Login</NavLink>}
        </div>
      </div>
    </header>
  )
}
export default Header;
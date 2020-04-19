import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (<nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/Settings" activeClassName={s.activeLink}>Settings</NavLink>
    </div>
  </nav>)
}
export default NavBar;
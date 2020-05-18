import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
const NavBar = (props) => {


  return (<div className={s.navBar}>
    <nav className={s.nav}>
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
    </nav>
    <div className={s.block_friends}>
      <div className={s.sign}>Friends</div>
      <div className={s.listFriends}>
        <ul>
          <li className={s.itemfriend}>
            <img className={s.imgfriend} src="http://www.isaacson.info/wp-content/uploads/2018/10/Linus-Torvalds.jpg" alt="#" />
            <br />
            <a href="#">{props.state.SideBarData[0].name}</a>
          </li>

          <li className={s.itemfriend}>
            <img className={s.imgfriend} src="http://www.isaacson.info/wp-content/uploads/2018/10/Linus-Torvalds.jpg" alt="#" />
            <br />
            <a href="#">{props.state.SideBarData[1].name}</a>
          </li>

          <li className={s.itemfriend}>
            <img className={s.imgfriend} src="http://www.isaacson.info/wp-content/uploads/2018/10/Linus-Torvalds.jpg" alt="#" />
            <br />
            <a href="#">{props.state.SideBarData[2].name}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
export default NavBar;
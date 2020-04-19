import React from 'react';
import s from './Header.module.css';


const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.img_icon}>
        <img src="https://ekb.toshiba-official-servis.ru/assets/templates/img/arrow.png"></img>
      </div>
    </header>
  )
}
export default Header;
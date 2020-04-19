import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (<div>
    <div>
      <img src='https://avatars.mds.yandex.net/get-pdb/1863838/a8e7c2a4-8aa8-43bd-ac95-92986f085fc7/s1200?webp=false'></img>
    </div>
    <div className={s.descriptionblock}>
      ava + description
  </div>
  </div>)
}
export default ProfileInfo;
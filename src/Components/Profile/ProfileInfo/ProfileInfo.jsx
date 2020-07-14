import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Features/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  debugger;
  return (<div>
    <div className={s.descriptionblock}>
      <div className={s.avatar} >
        <img src={props.profile.photos.large} />
      </div>
    </div>
  </div>)
}
export default ProfileInfo;
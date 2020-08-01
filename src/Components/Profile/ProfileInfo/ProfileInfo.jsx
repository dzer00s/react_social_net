import React from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/icon_user.png';
import Preloader from '../../Features/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (<div className={s.profileInfoMain}>
    <div className={s.profileInfo}>
      <div className={s.avatar} >
        <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto  }  alt='avatar' className={s.avatarImg} />
      </div>
      <div className={s.profileInfoItem}>
        <p className={s.profileInfoItemEl1}>{props.profile.fullName}</p>
        <p>Обо мне:</p> <p>{props.profile.aboutMe}</p>
      </div>
    </div>
  </div>)
}
export default ProfileInfo;
import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';


const Profile = (props) => {
  return (
    <div className={s.profileMain}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}
export default Profile;
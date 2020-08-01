import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import { Redirect } from 'react-router-dom';


const Profile = (props) => {

  if (!props.isAuth) {
    return <Redirect to={"/Login"} />
  }

  return (
    <div className={s.profileMain}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}
export default Profile;
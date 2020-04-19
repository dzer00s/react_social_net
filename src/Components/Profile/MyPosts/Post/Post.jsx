import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://avatars.mds.yandex.net/get-pdb/790806/d8e7a9d8-ae58-4c22-828d-e51507646fac/s1200?webp=false' />
      {props.message}
      <br />
      <span>like </span>{props.like}

    </div>
  )
}
export default Post;
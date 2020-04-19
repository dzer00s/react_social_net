import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postData = [
    { id: 1, message: 'your photo amazing', like:'10' },
    { id: 2, message: 'thx Marie', like:'2' }
]
  return (<div className={s.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
    <Post message={postData[0].message} like={postData[0].like} />
    <Post message={postData[1].message} like={postData[1].like} />
    </div>
  </div>)

}
export default MyPosts;
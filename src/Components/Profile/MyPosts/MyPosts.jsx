import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
// import { updateNewPostText } from '../../../redux/state';

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} like={p.like} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());

  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // let actionPost = updateNewPostTextActionCreator(text);
    // props.dispatch(actionPost);
  }

  return (<div className={s.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement}
          value={props.newPostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>)

}
export default MyPosts;
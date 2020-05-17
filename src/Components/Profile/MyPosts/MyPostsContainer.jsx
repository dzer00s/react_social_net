import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let actionPost = updateNewPostTextActionCreator(text);
    props.store.dispatch(actionPost);
  }

  return (<MyPosts
    updateNewPostText={onPostChange}
    addPost={addPost}
    posts={state.ProfilePage.posts}
    newPostText={state.ProfilePage.newPostText} />)
}
export default MyPostsContainer;
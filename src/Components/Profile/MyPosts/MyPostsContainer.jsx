import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
          let addPost = () => {
            store.dispatch(addPostActionCreator());
          }
          let onPostChange = (text) => {
            let actionPost = updateNewPostTextActionCreator(text);
            store.dispatch(actionPost);
          }
          return <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.ProfilePage.posts}
            newPostText={state.ProfilePage.newPostText} />
        }
      }
    </StoreContext.Consumer>
  )
}
export default MyPostsContainer;
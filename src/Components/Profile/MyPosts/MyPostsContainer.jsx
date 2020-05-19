import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {

//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState();
//           let addPost = () => {
//             store.dispatch(addPostActionCreator());
//           }
//           let onPostChange = (text) => {
//             let actionPost = updateNewPostTextActionCreator(text);
//             store.dispatch(actionPost);
//           }
//           return <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.ProfilePage.posts}
//             newPostText={state.ProfilePage.newPostText} />
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    posts: state.ProfilePage.posts,
    newPostText: state.ProfilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      let actionPost = updateNewPostTextActionCreator(text);
      dispatch(actionPost);
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
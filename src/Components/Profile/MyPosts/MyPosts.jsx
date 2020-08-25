import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} like={p.like} />)

  let newPostElement = React.createRef();

  let addNewPost = (values) => {
    props.AddPost(values.newPostText)
  }


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (<div className={s.postsBlock}>
    <h3>My posts</h3>
    <AddPostFormRedux onSubmit={addNewPost} />
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>)
}

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" placeholder="Enter post" />
      </div>
      <div>
        <button onClick={props.onAddPost}>Add post</button>
      </div>
    </form>
  )
}
const AddPostFormRedux = reduxForm({ form: "MyPostsAddPostForm" })(AddPostForm);

export default MyPosts;
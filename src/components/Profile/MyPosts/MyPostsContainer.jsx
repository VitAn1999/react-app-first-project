import MyPosts from './MyPosts';
import React from 'react';
import {
  addPostCreator,
  changePostCreator,
} from '../../../store/my-post-reducer';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostCreator());
  };
  let changePost = (text) => {
    props.store.dispatch(changePostCreator(text));
  };
  return (
    <MyPosts
      posts={state.postData.posts}
      postValue={state.postData.postValue}
      addPost={addPost}
      changePost={changePost}
    />
  );
};

export default MyPostsContainer;

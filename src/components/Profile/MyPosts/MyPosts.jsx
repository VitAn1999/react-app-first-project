import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => {
    return <Post key={post.id} text={post.post} count={post.count} />;
  });
  let newPost = React.createRef();

  let addPost = () => {
    let text = newPost.current.value;
    if (text) {
      props.addPost();
    }
  };
  let changePost = () => {
    let text = newPost.current.value;
    props.changePost(text);
  };
  return (
    <div className={classes.posts}>
      <form className={classes.posts__form}>
        <label className={classes['posts__post-title']} htmlFor="input-post">
          My post:
        </label>
        <textarea
          onChange={changePost}
          id="input-post"
          ref={newPost}
          name="input-post"
          value={props.postValue}
          rows="4"
          cols="50"
          placeholder="Writting something..."
          className={classes['posts__post-input']}
        />
        <button
          type="button"
          onClick={addPost}
          className={classes['posts__btn-public']}
        >
          Public post
        </button>
      </form>
      {postElements}
    </div>
  );
};

export default MyPosts;

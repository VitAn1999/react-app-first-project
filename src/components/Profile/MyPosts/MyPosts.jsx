import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => {
    return <Post key={post.id} text={post.post} count={post.count} />;
  });
  let newPost = React.createRef();
  let addPost = () => {
    let text = newPost.current.value;
    alert(text);
  };
  return (
    <div className={classes.posts}>
      <form className={classes.posts__form}>
        <label className={classes["posts__post-title"]} htmlFor="input-post">
          My post:
        </label>
        <textarea
          id="input-post"
          ref={newPost}
          name="input-post"
          rows="4"
          cols="50"
          placeholder="Writting something..."
          className={classes["posts__post-input"]}
        />
        <button onClick={addPost} className={classes["posts__btn-public"]}>
          Public post
        </button>
      </form>
      {postElements}
    </div>
  );
};

export default MyPosts;

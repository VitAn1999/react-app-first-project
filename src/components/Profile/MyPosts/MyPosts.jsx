import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <form class={classes.posts__form}>
        <label className={classes['posts__post-title']} for="input-post">
          My post:
        </label>
        <textarea
          id="input-post"
          name="input-post"
          rows="4"
          cols="50"
          placeholder="Writting something..."
          className={classes['posts__post-input']}
        />
        <button type="submit" className={classes['posts__btn-public']}>
          Public post
        </button>
      </form>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;

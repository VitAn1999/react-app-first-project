import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postData = [
    { id: 1, post: 'какулька', count: '5' },
    { id: 2, post: 'Бэтмен', count: '12' },
    { id: 3, post: 'какулька', count: '8' },
    { id: 4, post: 'Николас Кейдж', count: '15' },
  ];

  let postElements = postData.map((post) => {
    return <Post text={post.post} count={post.count} />;
  });
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
      {postElements}
    </div>
  );
};

export default MyPosts;

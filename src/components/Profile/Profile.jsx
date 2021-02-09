import classes from './Profile.module.css';

const Profile = () => {
  return (
    <main className={classes.content}>
      <div className={classes['content__image-wrapper']}>
        <img
          src="https://klike.net/uploads/posts/2019-01/1548057229_3.jpg"
          alt="обои"
          className={classes.content__image}
        />
      </div>

      <img
        src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
        alt="аватар"
        className={classes.content__photo}
      />
      <div className={classes.content__title}>
        <p className={classes.content__name}>Name Surname</p>
        <ul className={classes.content__about}>
          <li className={classes['content__about-prop']}>City:</li>
          <li className={classes['content__about-prop']}>Country:</li>
          <li className={classes['content__about-prop']}>Job:</li>
          <li className={classes['content__about-prop']}>Telephone:</li>
        </ul>
      </div>

      <div className={classes.content__post}>
        <form class={classes.content__form}>
          <label className={classes['content__post-title']} for="input-post">
            My post:
          </label>
          <textarea
            id="input-post"
            name="input-post"
            rows="4"
            cols="50"
            placeholder="Writting something..."
            className={classes['content__post-input']}
          />
          <button type="submit" className={classes['content__btn-public']}>
            Public post
          </button>
        </form>
        <div class={classes.content__articles}>
          <article className={classes['content__my-post']}>Post #1</article>
          <article className={classes['content__my-post']}>Post #2</article>
        </div>
      </div>
    </main>
  );
};

export default Profile;

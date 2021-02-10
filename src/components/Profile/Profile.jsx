import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

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
      <MyPosts />
    </main>
  );
};

export default Profile;

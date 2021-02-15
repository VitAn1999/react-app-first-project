import classes from './ProfileWallpaper.module.css';

const ProfileWallpaper = (props) => {
  return (
    <div className={classes['content__image-wrapper']}>
      <img
        src="https://klike.net/uploads/posts/2019-01/1548057229_3.jpg"
        alt="обои"
        className={classes.content__image}
      />
    </div>
  );
};

export default ProfileWallpaper;

import classes from './ProfileTitle.module.css';

const ProfileTitle = (props) => {
  return (
    <div className={classes.content__title}>
      <p className={classes.content__name}>Name Surname</p>
      <br />
      <ul className={classes.content__about}>
        <li className={classes['content__about-prop']}>City:</li>
        <li className={classes['content__about-prop']}>Country:</li>
        <li className={classes['content__about-prop']}>Job:</li>
        <li className={classes['content__about-prop']}>Email:</li>
      </ul>
      <br />
      <p>Status:</p>
    </div>
  );
};

export default ProfileTitle;

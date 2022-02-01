import classes from './ProfileTitle.module.css';

const ProfileTitle = (props) => {
  return (
    <div className={classes.content__title}>
      <p className={classes.content__name}>
        {props.name} {props.surname}
      </p>
      <br />
      <ul className={classes.content__about}>
        <li className={classes['content__about-prop']}>City: {props.city}</li>
        <li className={classes['content__about-prop']}>
          Country: {props.country}
        </li>
        <li className={classes['content__about-prop']}>Job: {props.job}</li>
        <li className={classes['content__about-prop']}>Email: {props.email}</li>
      </ul>
      <br />
      <p>Status: {props.status}</p>
    </div>
  );
};

export default ProfileTitle;

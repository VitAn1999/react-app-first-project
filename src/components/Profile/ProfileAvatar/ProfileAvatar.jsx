import classes from './ProfileAvatar.module.css';

const ProfileAvatar = (props) => {
  return (
    <div className={classes.content__photo}>
      <img
        src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
        alt="аватар"
      />
    </div>
  );
};

export default ProfileAvatar;

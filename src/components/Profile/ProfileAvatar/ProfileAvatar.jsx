import classes from './ProfileAvatar.module.css';

const ProfileAvatar = (props) => {
  return (
    <div
      className={classes.content__photo}
      style={{
        backgroundImage: props.imgSrc,
      }}
    >
      <span className={classes.content__input}>
        <input type="file" id="inputFile" />
      </span>
    </div>
  );
};

export default ProfileAvatar;

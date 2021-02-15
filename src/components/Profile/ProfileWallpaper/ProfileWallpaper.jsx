import classes from './ProfileWallpaper.module.css';

const ProfileWallpaper = (props) => {
  return (
    <div
      className={classes['content__image-wrapper']}
      style={{
        backgroundImage: props.imgSrc,
      }}
    >
      <span className={classes.content__input}>
        <img
          id="spanInputFile"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd3%2FHigh-contrast-camera-photo.svg%2F480px-High-contrast-camera-photo.svg.png&f=1&nofb=1"
          alt="download_photo"
        />
        <input type="file" id="inputFile" />
      </span>
    </div>
  );
};

export default ProfileWallpaper;

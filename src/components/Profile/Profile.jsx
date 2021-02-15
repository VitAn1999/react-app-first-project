import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileWallpaper from './ProfileWallpaper/ProfileWallpaper';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileTitle from './ProfileTitle/ProfileTitle';

const Profile = () => {
  return (
    <main className={classes.content}>
      <ProfileWallpaper />
      <ProfileAvatar />
      <ProfileTitle />
      <MyPosts />
    </main>
  );
};

export default Profile;

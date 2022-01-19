import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileWallpaper from './ProfileWallpaper/ProfileWallpaper';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileTitle from './ProfileTitle/ProfileTitle';

const Profile = (props) => {
  return (
    <main className={classes.content}>
      <ProfileWallpaper imgSrc="url('https://klike.net/uploads/posts/2019-01/1548057229_3.jpg')" />
      <ProfileAvatar imgSrc="url('https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg')" />
      <ProfileTitle />
      <MyPostsContainer store={props.store} />
    </main>
  );
};

export default Profile;

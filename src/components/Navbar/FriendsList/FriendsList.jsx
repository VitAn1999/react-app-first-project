import classes from "./FriendsList.module.css";
import Friend from "./Friend/Friend";

const FriendsList = (props) => {
  let count = 0;
  let friend = props.friends.map((friend) => {
    if (count < 3) {
      count += 1;
      return <Friend key={friend.id} name={friend.userName} src={friend.src} />;
    }
  });
  return (
    <div className={classes["friends-list__wrapper"]}>
      <p className={classes["friends-list__title"]}>Friends list:</p>
      <div className={classes["friends-list__friend"]}>{friend}</div>
    </div>
  );
};

export default FriendsList;

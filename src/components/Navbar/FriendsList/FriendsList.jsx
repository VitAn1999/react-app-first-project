import classes from "./FriendsList.module.css";
import Friend from "./Friend/Friend";
import { NavLink } from "react-router-dom";

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
      <NavLink to="/" className={classes["friends-list__title"]}>
        Friends list:
      </NavLink>
      <div className={classes["friends-list__friend"]}>{friend}</div>
    </div>
  );
};

export default FriendsList;

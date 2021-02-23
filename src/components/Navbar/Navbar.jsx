import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import FriendsList from "./FriendsList/FriendsList";

const Navbar = (props) => {
  return (
    <aside className={classes["nav-bar"]}>
      <ul className={classes["nav-bar__list"]}>
        <li className={classes["nav-bar__elem"]}>
          <NavLink
            to="/profile"
            className={classes["nav-bar__link"]}
            activeClassName={classes.active}
          >
            Profile
          </NavLink>
        </li>
        <li className={classes["nav-bar__elem"]}>
          <NavLink
            to="/messages"
            className={classes["nav-bar__link"]}
            activeClassName={classes.active}
          >
            Messages
          </NavLink>
        </li>
        <li className={classes["nav-bar__elem"]}>
          <NavLink
            to="/news"
            className={classes["nav-bar__link"]}
            activeClassName={classes.active}
          >
            News
          </NavLink>
        </li>
        <li className={classes["nav-bar__elem"]}>
          <NavLink
            to="/music"
            className={classes["nav-bar__link"]}
            activeClassName={classes.active}
          >
            Music
          </NavLink>
        </li>
        <li className={classes["nav-bar__elem_setting"]}>
          <NavLink
            to="/settings"
            className={classes["nav-bar__link"]}
            activeClassName={classes.active}
          >
            Settings
          </NavLink>
        </li>
      </ul>
      <FriendsList
        className={classes["nav-bar__list"]}
        friends={props.friends}
      />
    </aside>
  );
};

export default Navbar;

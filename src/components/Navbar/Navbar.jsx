import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import FriendsListContainer from './FriendsList/FriendsListContainer';

const Navbar = () => {
  return (
    <aside className={classes['nav-bar']}>
      <ul className={classes['nav-bar__list']}>
        <li className={classes['nav-bar__elem']}>
          <NavLink
            to="/profile"
            className={classes['nav-bar__link']}
            activeClassName={classes.active}
          >
            Profile
          </NavLink>
        </li>
        <li className={classes['nav-bar__elem']}>
          <NavLink
            to="/messages"
            className={classes['nav-bar__link']}
            activeClassName={classes.active}
          >
            Messages
          </NavLink>
        </li>
        <li className={classes['nav-bar__elem']}>
          <NavLink
            to="/news"
            className={classes['nav-bar__link']}
            activeClassName={classes.active}
          >
            News
          </NavLink>
        </li>
        <li className={classes['nav-bar__elem']}>
          <NavLink
            to="/music"
            className={classes['nav-bar__link']}
            activeClassName={classes.active}
          >
            Music
          </NavLink>
        </li>
        <li className={classes['nav-bar__elem']}>
          <NavLink
            to="/settings"
            className={classes['nav-bar__link']}
            activeClassName={classes.active}
          >
            Settings
          </NavLink>
        </li>
        <li className={classes['nav-bar__elem_find']}>
          <NavLink
            to="/find_people"
            className={classes['nav-bar__link']}
            activeClassName={classes.active}
          >
            Find people
          </NavLink>
        </li>
      </ul>
      <FriendsListContainer className={classes['nav-bar__list']} />
    </aside>
  );
};

export default Navbar;

import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <aside className={classes['nav-bar']}>
      <ul className={classes['nav-bar__list']}>
        <li className={classes['nav-bar__elem']}>
          <a
            href="/profile"
            className={`${classes['nav-bar__link']} ${classes.active}`}
          >
            Profile
          </a>
        </li>
        <li className={classes['nav-bar__elem']}>
          <a href="/messages" className={classes['nav-bar__link']}>
            Messages
          </a>
        </li>
        <li className={classes['nav-bar__elem']}>
          <a href="/news" className={classes['nav-bar__link']}>
            News
          </a>
        </li>
        <li className={classes['nav-bar__elem']}>
          <a href="/music" className={classes['nav-bar__link']}>
            Music
          </a>
        </li>
        <li className={classes['nav-bar__elem_setting']}>
          <a href="/settings" className={classes['nav-bar__link']}>
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Navbar;

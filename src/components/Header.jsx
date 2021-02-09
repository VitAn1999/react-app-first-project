import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/800px-Green_Bay_Packers_logo.svg.png"
        alt="logo"
        className={classes.header__img}
      />
      <p className={classes.header__title}>Some Social Network</p>
    </header>
  );
};

export default Header;

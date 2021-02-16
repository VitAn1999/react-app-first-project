import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <NavLink
      to={'/messages/' + props.id}
      className={classes.content__dialog}
      activeClassName={classes.active}
    >
      <img
        src={props.src}
        alt="user avatar"
        className={classes['content__dialog-avatar']}
      />
      <p className={classes['content__dialog-user']}>{props.userName}</p>
    </NavLink>
  );
};

export default DialogItem;

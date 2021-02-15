import classes from './DialogList.module.css';
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

const DialogList = (props) => {
  let userData = [
    {
      id: 1,
      userName: 'Anton',
      src:
        'https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg',
    },
    {
      id: 2,
      userName: 'Viktor',
      src:
        'https://cdn.freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg?mt=c7bcef8b',
    },
    {
      id: 3,
      userName: "Ales'",
      src: 'https://cdn1.flamp.ru/6e8b1e5fe1cc01a4d15e1d27c602dfa7.jpg',
    },
    {
      id: 4,
      userName: 'Joshua',
      src:
        'https://i.pinimg.com/736x/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg',
    },
  ];

  return (
    <div className={classes.content__dialogs}>
      <h2 className={classes['content__dialogs-title']}>Dialogs</h2>
      <DialogItem
        id={userData[0].id}
        userName={userData[0].userName}
        src={userData[0].src}
      />
      <DialogItem
        id={userData[1].id}
        userName={userData[1].userName}
        src={userData[1].src}
      />
      <DialogItem
        id={userData[2].id}
        userName={userData[2].userName}
        src={userData[2].src}
      />
      <DialogItem
        id={userData[3].id}
        userName={userData[3].userName}
        src={userData[3].src}
      />
    </div>
  );
};

export default DialogList;

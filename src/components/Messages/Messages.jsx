import classes from './Messages.module.css';

const Messages = (props) => {
  return (
    <div className={classes.content}>
      <div className={classes.content__dialogs}>
        <h2 className={classes['content__dialogs-title']}>Dialogs</h2>
        <div
          className={classes.content__dialog}
          activeClassName={classes.active}
        >
          <img
            src="https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg"
            alt="user avatar"
            className={classes['content__dialog-avatar']}
          />
          <p className={classes['content__dialog-user']}>Anton</p>
        </div>
        <div
          className={classes.content__dialog}
          activeClassName={classes.active}
        >
          <img
            src="https://cdn.freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg?mt=c7bcef8b"
            alt="user avatar"
            className={classes['content__dialog-avatar']}
          />
          <p className={classes['content__dialog-user']}>Viktor</p>
        </div>
        <div
          className={classes.content__dialog}
          activeClassName={classes.active}
        >
          <img
            src="https://cdn1.flamp.ru/6e8b1e5fe1cc01a4d15e1d27c602dfa7.jpg"
            alt="user avatar"
            className={classes['content__dialog-avatar']}
          />
          <p className={classes['content__dialog-user']}>Ales'</p>
        </div>
        <div
          className={classes.content__dialog}
          activeClassName={classes.active}
        >
          <img
            src="https://i.pinimg.com/736x/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg"
            alt="user avatar"
            className={classes['content__dialog-avatar']}
          />
          <p className={classes['content__dialog-user']}>Joshua</p>
        </div>
      </div>
      <div className={classes.content__messages}>
        <p className={classes.content__message_incoming}>Привет</p>
        <p className={classes.content__message_incoming}>Как дела?</p>
        <p className={classes.content__message_outgoing}>Привет, нормально</p>
        <p className={classes.content__message_outgoing}>Как сам?</p>
        <p className={classes.content__message_incoming}>Тоже ок, позвонишь?</p>
        <p className={classes.content__message_outgoing}>5 мин</p>
      </div>
    </div>
  );
};

export default Messages;

import classes from './MessageArea.module.css';

const MessageArea = (props) => {
  return (
    <div className={classes['content__message-area']}>
      <div className={classes.content__messages}>
        <div className={classes['content__message-wrapper_incoming']}>
          <img
            src="https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg"
            alt="user avatar"
            className={classes['content__message-avatar']}
          />
          <p className={classes.content__message_incoming}>Привет</p>
        </div>
        <div className={classes['content__message-wrapper_incoming']}>
          <img
            src="https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg"
            alt="user avatar"
            className={classes['content__message-avatar']}
          />
          <p className={classes.content__message_incoming}>Как дела?</p>
        </div>
        <div className={classes['content__message-wrapper_outgoing']}>
          <img
            src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
            alt="user avatar"
            className={classes['content__message-avatar']}
          />
          <p className={classes.content__message_outgoing}>Привет, нормально</p>
        </div>
        <div className={classes['content__message-wrapper_outgoing']}>
          <img
            src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
            alt="user avatar"
            className={classes['content__message-avatar']}
          />
          <p className={classes.content__message_outgoing}>Как сам?</p>
        </div>
        <div className={classes['content__message-wrapper_incoming']}>
          <img
            src="https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg"
            alt="user avatar"
            className={classes['content__message-avatar']}
          />
          <p className={classes.content__message_incoming}>
            Тоже ок, позвонишь?
          </p>
        </div>
        <div className={classes['content__message-wrapper_outgoing']}>
          <img
            src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
            alt="user avatar"
            className={classes['content__message-avatar']}
          />
          <p className={classes.content__message_outgoing}>5 мин</p>
        </div>
      </div>
      <form className={classes['content__entry-field']}>
        <textarea rows="2" cols="50" placeholder="Enter message" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default MessageArea;

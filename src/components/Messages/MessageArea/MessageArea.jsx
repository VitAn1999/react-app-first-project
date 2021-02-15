import classes from './MessageArea.module.css';

const MessageIncoming = (props) => {
  return (
    <div className={classes['content__message-wrapper_incoming']}>
      <img
        src={props.src}
        alt="user avatar"
        className={classes['content__message-avatar']}
      />
      <p className={classes.content__message_incoming}>{props.message}</p>
    </div>
  );
};

const MessageOutgoing = (props) => {
  return (
    <div className={classes['content__message-wrapper_outgoing']}>
      <img
        src={props.src}
        alt="user avatar"
        className={classes['content__message-avatar']}
      />
      <p className={classes.content__message_outgoing}>{props.message}</p>
    </div>
  );
};

const MessageArea = (props) => {
  return (
    <div className={classes['content__message-area']}>
      <div className={classes.content__messages}>
        <MessageIncoming
          src="https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg"
          message="Привет"
        />
        <MessageIncoming
          src="https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg"
          message="Как дела?"
        />
        <MessageOutgoing
          src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
          message="Привет, нормально"
        />
        <MessageOutgoing
          src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
          message="Как сам?"
        />
        <MessageIncoming
          src="https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg"
          message="Тоже ок, позвонишь?"
        />
        <MessageOutgoing
          src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
          message="5 мин"
        />
      </div>
      <form className={classes['content__entry-field']}>
        <textarea rows="2" cols="50" placeholder="Enter message" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default MessageArea;

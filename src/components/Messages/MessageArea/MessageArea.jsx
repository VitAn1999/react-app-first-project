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
  let incomMessageData = [
    { id: 1, message: 'Привет' },
    { id: 2, message: 'Как дела?' },
    { id: 3, message: 'Тоже ок, позвонишь?' },
  ];

  let outgoMessageData = [
    { id: 1, message: 'Привет, нормально' },
    { id: 2, message: 'Как сам?' },
    { id: 3, message: '5 мин' },
  ];

  return (
    <div className={classes['content__message-area']}>
      <div className={classes.content__messages}>
        <MessageIncoming
          src="https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg"
          message={incomMessageData[0].message}
        />
        <MessageIncoming
          src="https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg"
          message={incomMessageData[1].message}
        />
        <MessageOutgoing
          src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
          message={outgoMessageData[0].message}
        />
        <MessageOutgoing
          src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
          message={outgoMessageData[1].message}
        />
        <MessageIncoming
          src="https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg"
          message={incomMessageData[2].message}
        />
        <MessageOutgoing
          src="https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg"
          message={outgoMessageData[2].message}
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

import classes from './MessageIncoming.module.css';

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

export default MessageIncoming;

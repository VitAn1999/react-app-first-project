import classes from './MessageOutgoing.module.css';

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

export default MessageOutgoing;

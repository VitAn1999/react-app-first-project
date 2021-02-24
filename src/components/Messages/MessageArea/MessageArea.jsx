import classes from "./MessageArea.module.css";
import Message from "./Message/Message";

const MessageArea = (props) => {
  let message = props.messages.map((message) => {
    return (
      <Message
        key={message.index}
        message={message.message}
        type={message.type}
        src={message.src}
      />
    );
  });
  return (
    <div className={classes["content__message-area"]}>
      <div className={classes.content__messages}>{message}</div>
      <form className={classes["content__entry-field"]}>
        <textarea rows="2" cols="50" placeholder="Enter message" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default MessageArea;

import classes from "./MessageArea.module.css";
import Message from "./Message/Message";
import React from "react";

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

  let newMessage = React.createRef();
  let sendMessage = () => {
    let message = newMessage.current.value;
    alert(message);
  };

  return (
    <div className={classes["content__message-area"]}>
      <div className={classes.content__messages}>{message}</div>
      <form className={classes["content__entry-field"]}>
        <textarea
          ref={newMessage}
          rows="2"
          cols="50"
          placeholder="Enter message"
        />
        <button onClick={sendMessage}>Send</button>
      </form>
    </div>
  );
};

export default MessageArea;

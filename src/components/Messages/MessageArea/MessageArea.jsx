import classes from "./MessageArea.module.css";
import Message from "./Message/Message";
import React from "react";

const MessageArea = (props) => {
  let messageElem = props.messages.map((message) => {
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
    let func = props.addMessage.bind(props.context);
    if (message) {
      func();
    }
  };
  let changeMessage = () => {
    let message = newMessage.current.value;
    let func = props.changeMessage.bind(props.context);
    func(message);
  };

  return (
    <div className={classes["content__message-area"]}>
      <div className={classes.content__messages}>{messageElem}</div>
      <form className={classes["content__entry-field"]}>
        <textarea
          onChange={changeMessage}
          ref={newMessage}
          value={props.messageValue}
          rows="2"
          cols="50"
          placeholder="Enter message"
        />
        <button type="button" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageArea;

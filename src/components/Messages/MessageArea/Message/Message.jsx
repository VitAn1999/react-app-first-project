import classes from "./Message.module.css";
import React from "react";

const Message = (props) => {
  return (
    <div className={`${classes[props.type]}`}>
      <img
        src={props.src}
        alt="user avatar"
        className={classes["content__message-avatar"]}
      />
      <p>{props.message}</p>
    </div>
  );
};

export default Message;

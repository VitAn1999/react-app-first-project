import classes from "./Messages.module.css";
import MessageArea from "./MessageArea/MessageArea";
import DialogList from "./DialogsList/DialogList";

const Messages = (props) => {
  return (
    <div className={classes.content}>
      <DialogList users={props.users} />
      <MessageArea messages={props.messages} />
    </div>
  );
};

export default Messages;

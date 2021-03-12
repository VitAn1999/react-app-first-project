import classes from "./Messages.module.css";
import MessageArea from "./MessageArea/MessageArea";
import DialogList from "./DialogsList/DialogList";

const Messages = (props) => {
  return (
    <div className={classes.content}>
      <DialogList users={props.users} />
      <MessageArea
        messages={props.messages}
        messageValue={props.messageValue}
        addMessage={props.addMessage}
        changeMessage={props.changeMessage}
        context={props.context}
      />
    </div>
  );
};

export default Messages;

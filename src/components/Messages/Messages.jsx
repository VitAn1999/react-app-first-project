import classes from './Messages.module.css';
import MessageAreaContainer from './MessageArea/MessageAreaContainer';
import DialogListContainer from './DialogsList/DialogListContainer';

const Messages = (props) => {
  return (
    <div className={classes.content}>
      <DialogListContainer store={props.store} users={props.users} />
      <MessageAreaContainer
        store={props.store}
        // messages={props.messages}
        // messageValue={props.messageValue}
        // dispatch={props.dispatch}
      />
    </div>
  );
};

export default Messages;

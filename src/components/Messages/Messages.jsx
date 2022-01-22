import classes from './Messages.module.css';
import MessageAreaContainer from './MessageArea/MessageAreaContainer';
import DialogListContainer from './DialogsList/DialogListContainer';

const Messages = () => {
  return (
    <div className={classes.content}>
      <DialogListContainer />
      <MessageAreaContainer />
    </div>
  );
};

export default Messages;

import classes from './Messages.module.css';
import MessageArea from './MessageArea/MessageArea';
import DialogList from './DialogsList/DialogList';

const Messages = (props) => {
  return (
    <div className={classes.content}>
      <DialogList />
      <MessageArea />
    </div>
  );
};

export default Messages;

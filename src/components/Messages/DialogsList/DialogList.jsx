import classes from './DialogList.module.css';
import DialogItem from './DialogItem/DialogItem';
const DialogList = (props) => {
  let friendsItem = props.friends.map((friend) => {
    return (
      <DialogItem
        key={friend.id.toString()}
        id={friend.id}
        userName={friend.userName}
        src={friend.src}
      />
    );
  });

  return (
    <div className={classes.content__dialogs}>
      <h2 className={classes['content__dialogs-title']}>Dialogs</h2>
      {friendsItem}
    </div>
  );
};

export default DialogList;

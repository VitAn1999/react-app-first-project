import classes from "./DialogList.module.css";
import DialogItem from "./DialogItem/DialogItem";
const DialogList = (props) => {
  let usersItem = props.users.map((user) => {
    return (
      <DialogItem
        key={user.id.toString()}
        id={user.id}
        userName={user.userName}
        src={user.src}
      />
    );
  });

  return (
    <div className={classes.content__dialogs}>
      <h2 className={classes["content__dialogs-title"]}>Dialogs</h2>
      {usersItem}
    </div>
  );
};

export default DialogList;

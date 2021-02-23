import classes from "./Friend.module.css";
const Friend = (props) => {
  return (
    <div className={classes.friend}>
      <img src={props.src} alt="avatar" />
      <p>{props.name}</p>
    </div>
  );
};
export default Friend;

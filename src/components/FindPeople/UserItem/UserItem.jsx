import React from 'react';
import classes from './UserItem.module.css';

const UserItem = (props) => {
  console.log(props);

  return (
    <div className={classes.user__item}>
      <div className={classes.item__main}>
        <img className={classes.item__avatar} src={props.src} alt="avatar" />
        <h3 className={classes.item__name}>{props.userName}</h3>
        <h3 className={classes.item__surname}>{props.userSurname}</h3>
      </div>
      <div className={classes.item__status}>
        <h3>Status:</h3>
        <p>{props.status}</p>
      </div>
      <div className={classes.item__info}>
        <h3>User info:</h3>
        <div className={classes.info__element}>City: {props.city}</div>
        <div className={classes.info__element}>Country: {props.country}</div>
        <div className={classes.info__element}>Job: {props.job}</div>
        <div className={classes.info__element}>Email: {props.email}</div>
      </div>

      <div className={classes.item__button}>
        {props.followed ? (
          <button
            className={classes.button__unfollowed}
            onClick={() => {
              props.toggleFollowed(props.id);
            }}
          >
            Unfollowed
          </button>
        ) : (
          <button
            className={classes.button__followed}
            onClick={() => {
              props.toggleFollowed(props.id);
            }}
          >
            Followed
          </button>
        )}
      </div>
    </div>
  );
};

export default UserItem;

import React from 'react';
import classes from './FriendsItem.module.css';

const FriendsItem = (props) => {
  return (
    <div className={classes.friends__item}>
      <img className={classes.item__avatar} src={props.src} alt="avatar" />
      <h3 className={classes.item__name}>{props.userName}</h3>
      <div className={classes.item__description}>
        <span className={classes.description__text}>{props.status}</span>
      </div>
    </div>
  );
};

export default FriendsItem;

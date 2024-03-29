import React from 'react';
import UserItem from './UserItem/UserItem';
import classes from './FindPeople.module.css';
import * as axios from 'axios';

const users = [
  {
    id: 1,
    currentUser: true,
    userName: 'Vitan',
    userSurname: 'Roshchupkin',
    src: 'https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg',
    status: 'I am little pony',
    followed: false,
    userInfo: {
      city: 'Dzerzhinsk',
      country: 'Belarus',
      job: 'Front-end developer',
      email: 'vitan@dreamstime.com'
    }
  },
  {
    id: 2,
    currentUser: false,
    userName: 'Anton',
    userSurname: 'Ivanov',
    src: 'https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg',
    status: 'successmaker',
    followed: true,
    userInfo: {
      city: 'Minsk',
      country: 'Belarus',
      job: 'Back-end developer',
      email: 'a.ivanov@dreamstime.com'
    }
  },
  {
    id: 3,
    currentUser: false,
    userName: 'Viktor',
    userSurname: 'Komarov',
    src: 'https://cdn.freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg?mt=c7bcef8b',
    status: 'I like dogs',
    followed: true,
    userInfo: {
      city: 'Moscow',
      country: 'Russia',
      job: 'UI/UX Designer',
      email: 'viktor1989komarov@gmail.com'
    }
  },
  {
    id: 4,
    currentUser: false,
    userName: 'Alex',
    userSurname: 'Koval',
    src: 'https://www.meme-arsenal.com/memes/1117f8f4cf4706c9bee5ce8757576967.jpg',
    status: 'Prosto Koval',
    followed: false,
    userInfo: {
      city: 'Kiev',
      country: 'Ukraine',
      job: 'PM',
      email: 'alex.koval@dreamstime.com'
    }
  },
  {
    id: 5,
    currentUser: false,
    userName: "Ales'",
    userSurname: 'Muckhin',
    src: 'https://cdn1.flamp.ru/6e8b1e5fe1cc01a4d15e1d27c602dfa7.jpg',
    status: 'Just a little bit, be my little bitch',
    followed: true,
    userInfo: {
      city: 'Minsk',
      country: 'Belarus',
      job: 'pizdabol',
      email: '-'
    }
  },
  {
    id: 6,
    currentUser: false,
    userName: 'Peter',
    userSurname: 'Jackson',
    src: 'https://www.film.ru/sites/default/files/people/peter-jackson.jpg',
    status: 'Lord of the rings',
    followed: false,
    userInfo: {
      city: 'Vellington',
      country: 'New Zeland',
      job: 'Director',
      email: 'peter@jackson.com'
    }
  },
  {
    id: 7,
    currentUser: false,
    userName: 'Joshua',
    userSurname: 'Blanc',
    src: 'https://i.pinimg.com/736x/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg',
    status: 'I hate dogs',
    followed: true,
    userInfo: {
      city: 'Paris',
      country: 'France',
      job: 'SQL ingener',
      email: 'joshua.blancSQL@dreamstime.com'
    }
  }
];
const FindPeople = (props) => {
  if (props.users.length === 0) {
    props.getUsers(users);
  }
  axios
    .get('https://social-network.samuraijs.com/api/1.0/users')
    .then((response) => console.log(response.data.items));
  let count = 0;
  // eslint-disable-next-line
  let userItem = props.users.map((user) => {
    if (user.currentUser === false) {
      if (count < 4) {
        count += 1;
        return (
          <UserItem
            key={user.id.toString()}
            id={user.id}
            userName={user.userName}
            userSurname={user.userSurname}
            src={user.src}
            status={user.status}
            followed={user.followed}
            city={user.userInfo.city}
            country={user.userInfo.country}
            job={user.userInfo.job}
            email={user.userInfo.email}
            toggleFollowed={props.toggleFollowed}
          />
        );
      }
    }
  });
  return (
    <div className={classes['users-container']}>
      <h2 className={classes['users-title']}>Users list:</h2>
      <div className={classes['users-list']}>{userItem}</div>
    </div>
  );
};

export default FindPeople;

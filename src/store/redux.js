import { combineReducers, createStore } from 'redux';
import myPostReducer from './my-post-reducer';
import friendsListReducer from './friends-list-reducer';
import messageReducer from './message-reducer';
import usersDataReducer from './users-data-reducer';

let reducers = combineReducers({
  friendsData: friendsListReducer,
  postData: myPostReducer,
  messagesData: messageReducer,
  usersData: usersDataReducer,
});

let store = createStore(reducers);

export default store;

import { combineReducers, createStore } from 'redux';
import myPostReducer from './my-post-reducer';
import friendsListReducer from './friends-list-reducer';
import messageReducer from './message-reducer';
import usersDataReducer from './users-data-reducer';
import currentUserReducer from './current-user-reducer';

let reducers = combineReducers({
  friendsData: friendsListReducer,
  postData: myPostReducer,
  messagesData: messageReducer,
  usersData: usersDataReducer,
  currentUserData: currentUserReducer
});

let store = createStore(reducers);

export default store;

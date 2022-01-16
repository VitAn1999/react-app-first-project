import { combineReducers, createStore } from 'redux';
import myPostReducer from './my-post-reducer';
import userDataReducer from './users-data-reducer';
import messageReducer from './message-reducer';

let reducers = combineReducers({
  userData: userDataReducer,
  postData: myPostReducer,
  messagesData: messageReducer,
});

let store = createStore(reducers);

export default store;

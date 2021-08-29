import reportWebVitals from './reportWebVitals';
import store from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postData = store.getters.getPostData.call(store);
let usersData = store.getters.getUsersData.call(store);
let messagesData = store.getters.getMessagesData.call(store);

export let rerenderDOM = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={postData.posts}
        postValue={postData.postValue}
        users={usersData}
        friends={usersData}
        messages={messagesData.messages}
        messageValue={messagesData.messageValue}
        addMessage={store.mutations.addMessage}
        changeMessage={store.mutations.changeMessage}
        addPost={store.mutations.addPost}
        changePost={store.mutations.changePost}
        context={store}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderDOM(store);

store.subcscribe(rerenderDOM);

reportWebVitals();

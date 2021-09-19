import reportWebVitals from './reportWebVitals';
import store from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderDOM = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        postsData={store.getters.getPostData.call(store)}
        usersData={store.getters.getUsersData.call(store)}
        messagesData={store.getters.getMessagesData.call(store)}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderDOM(store);

store.subcscribe(rerenderDOM);

reportWebVitals();

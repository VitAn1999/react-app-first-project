import reportWebVitals from './reportWebVitals';
import store from './store/redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderDOM = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        postsData={state.postData}
        usersData={state.userData}
        messagesData={state.messagesData}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderDOM(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderDOM(state);
});

reportWebVitals();

import reportWebVitals from './reportWebVitals';
import store from './store/redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderDOM = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderDOM(store);

store.subscribe(() => {
  rerenderDOM(store);
});

reportWebVitals();

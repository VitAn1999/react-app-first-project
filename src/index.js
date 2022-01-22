import reportWebVitals from './reportWebVitals';
import store from './store/redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

export let rerenderDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderDOM();

store.subscribe(() => {
  rerenderDOM();
});

reportWebVitals();

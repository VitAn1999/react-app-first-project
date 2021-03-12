import reportWebVitals from "./reportWebVitals";
import store from "./store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { subcscribe } from "./store/index";

export let rerenderDOM = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={store.state.postData.posts}
        postValue={store.state.postData.postValue}
        users={store.state.usersData}
        friends={store.state.usersData}
        messages={store.state.messagesData.messages}
        messageValue={store.state.messagesData.messageValue}
        addMessage={store.mutations.addMessage}
        changeMessage={store.mutations.changeMessage}
        addPost={store.mutations.addPost}
        changePost={store.mutations.changePost}
        context={store}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderDOM(store);

subcscribe(rerenderDOM);

reportWebVitals();

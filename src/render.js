import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export let rerenderDOM = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={store.state.postData}
        users={store.state.usersData}
        friends={store.state.usersData}
        messages={store.state.messagesData}
        addPost={store.mutations.addPost}
        context={store}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

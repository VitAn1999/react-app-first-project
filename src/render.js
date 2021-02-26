import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export let rerenderDOM = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={store.state.postData.posts}
        postValue={store.state.postData.postValue}
        users={store.state.usersData}
        friends={store.state.usersData}
        messages={store.state.messagesData}
        addPost={store.mutations.addPost}
        changePost={store.mutations.changePost}
        context={store}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

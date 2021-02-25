import { rerenderDOM } from "../render";

let store = {
  state: {
    postData: [
      { id: 4, post: "какулька", count: "5" },
      { id: 3, post: "Бэтмен", count: "12" },
      { id: 2, post: "какулька", count: "8" },
      { id: 1, post: "Николас Кейдж", count: "15" },
    ],
    usersData: [
      {
        id: 1,
        userName: "Anton",
        src:
          "https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg",
      },
      {
        id: 2,
        userName: "Viktor",
        src:
          "https://cdn.freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg?mt=c7bcef8b",
      },
      {
        id: 3,
        userName: "Ales'",
        src: "https://cdn1.flamp.ru/6e8b1e5fe1cc01a4d15e1d27c602dfa7.jpg",
      },
      {
        id: 4,
        userName: "Joshua",
        src:
          "https://i.pinimg.com/736x/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg",
      },
    ],
    messagesData: [
      {
        index: 1,
        message: "Привет",
        type: "content__message_incoming",
        src:
          "https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg",
      },
      {
        index: 2,
        message: "Как дела?",
        type: "content__message_incoming",
        src:
          "https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg",
      },
      {
        index: 3,
        message: "Привет, нормально",
        type: "content__message_outgoing",
        src: "https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg",
      },
      {
        index: 4,
        message: "Как сам?",
        type: "content__message_outgoing",
        src: "https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg",
      },
      {
        index: 5,
        message: "Тоже ок, позвонишь?",
        type: "content__message_incoming",
        src:
          "https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg",
      },
      {
        index: 6,
        message: "5 мин",
        type: "content__message_outgoing",
        src: "https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg",
      },
    ],
  },
  mutations: {
    addPost(text) {
      let post = {
        id: this.state.postData[0]["id"] + 1,
        post: text,
        count: 0,
      };
      this.state.postData.unshift(post);
      rerenderDOM(store);
    },
  },
};

export default store;

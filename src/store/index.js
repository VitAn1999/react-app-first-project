let store = {
  _state: {
    postData: {
      posts: [
        { id: 4, post: 'какулька', count: '5' },
        { id: 3, post: 'Бэтмен', count: '12' },
        { id: 2, post: 'какулька', count: '8' },
        { id: 1, post: 'Николас Кейдж', count: '15' },
      ],
      postValue: '',
    },
    usersData: [
      {
        id: 1,
        userName: 'Anton',
        src: 'https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg',
      },
      {
        id: 2,
        userName: 'Viktor',
        src: 'https://cdn.freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg?mt=c7bcef8b',
      },
      {
        id: 3,
        userName: "Ales'",
        src: 'https://cdn1.flamp.ru/6e8b1e5fe1cc01a4d15e1d27c602dfa7.jpg',
      },
      {
        id: 4,
        userName: 'Joshua',
        src: 'https://i.pinimg.com/736x/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg',
      },
    ],
    messagesData: {
      messages: [
        {
          index: 1,
          message: 'Привет',
          type: 'content__message_incoming',
          src: 'https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg',
        },
        {
          index: 2,
          message: 'Как дела?',
          type: 'content__message_incoming',
          src: 'https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg',
        },
        {
          index: 3,
          message: 'Привет, нормально',
          type: 'content__message_outgoing',
          src: 'https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg',
        },
        {
          index: 4,
          message: 'Как сам?',
          type: 'content__message_outgoing',
          src: 'https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg',
        },
        {
          index: 5,
          message: 'Тоже ок, позвонишь?',
          type: 'content__message_incoming',
          src: 'https://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg',
        },
        {
          index: 6,
          message: '5 мин',
          type: 'content__message_outgoing',
          src: 'https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg',
        },
      ],
      messageValue: '',
    },
  },
  _subscriber() {
    console.log('rerender page');
  },
  getters: {
    getAllState() {
      return this._state;
    },
    getPostData() {
      return this._state.postData;
    },
    getUsersData() {
      return this._state.usersData;
    },
    getMessagesData() {
      return this._state.messagesData;
    },
  },
  subcscribe(observer) {
    this._subscriber = observer;
  },
  mutations: {
    addPost() {
      let post = {
        id: this._state.postData.posts[0]['id'] + 1,
        post: this._state.postData.postValue,
        count: 0,
      };
      this._state.postData.posts.unshift(post);
      this._state.postData.postValue = '';
      this._subscriber(store);
    },
    changePost(text) {
      this._state.postData.postValue = text;
      this._subscriber(store);
    },
    addMessage() {
      let message = {
        index: this._state.messagesData.messages.length + 1,
        message: this._state.messagesData.messageValue,
        type: 'content__message_outgoing',
        src: 'https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg',
      };
      this._state.messagesData.messages.push(message);
      this._state.messagesData.messageValue = '';
      this._subscriber(store);
    },
    changeMessage(text) {
      this._state.messagesData.messageValue = text;
      this._subscriber(store);
    },
  },
};

export default store;

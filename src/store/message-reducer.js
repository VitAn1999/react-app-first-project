// actions type
const addMessage = 'addMessage',
  changeMessage = 'changeMessage';

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case addMessage: {
      let message = {
        index: state.messages.length + 1,
        message: state.messageValue,
        type: 'content__message_outgoing',
        src: 'https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg',
      };
      return {
        ...state,
        messages: [...state.messages, message],
        messageValue: '',
      };
    }
    case changeMessage: {
      return { ...state, messageValue: action.message };
    }
    default:
      return state;
  }
};

// actions creator
export const addMessageCreator = () => ({ type: addMessage });
export const changeMessageCreator = (message) => ({
  type: changeMessage,
  message,
});

export default messageReducer;

// actions type
const addMessage = 'addMessage',
  changeMessage = 'changeMessage';

const messageReducer = (state, action) => {
  switch (action.type) {
    case addMessage:
      let message = {
        index: state.messages.length + 1,
        message: state.messageValue,
        type: 'content__message_outgoing',
        src: 'https://thumbs.dreamstime.com/b/little-prince-fox-70540233.jpg',
      };
      state.messages.push(message);
      state.messageValue = '';
      return state;
    case changeMessage:
      state.messageValue = action.message;
      return state;
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

import MessageArea from './MessageArea';
import React from 'react';
import {
  addMessageCreator,
  changeMessageCreator,
} from '../../../store/message-reducer';

const MessageAreaContainer = (props) => {
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(addMessageCreator());
  };
  let changeMessage = (message) => {
    props.store.dispatch(changeMessageCreator(message));
  };

  return (
    <MessageArea
      messages={state.messagesData.messages}
      messageValue={state.messagesData.messageValue}
      sendMessage={sendMessage}
      changeMessage={changeMessage}
    />
  );
};

export default MessageAreaContainer;

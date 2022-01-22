import MessageArea from './MessageArea';
import {
  addMessageCreator,
  changeMessageCreator,
} from '../../../store/message-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    messages: state.messagesData.messages,
    messageValue: state.messagesData.messageValue,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(addMessageCreator()),
    changeMessage: (message) => dispatch(changeMessageCreator(message)),
  };
};

const MessageAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageArea);

export default MessageAreaContainer;

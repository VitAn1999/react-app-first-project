import DialogList from './DialogList';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    friends: state.friendsData.friends,
  };
};

let mapDispatchToProps = () => {
  return {};
};

const DialogListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogList);

export default DialogListContainer;

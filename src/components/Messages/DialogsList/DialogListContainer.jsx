import DialogList from './DialogList';
import { connect } from 'react-redux';
import { getFriendsCreator } from '../../../store/friends-list-reducer';

let mapStateToProps = (state) => {
  return {
    friends: state.friendsData.friends,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getFriends: (friends) => dispatch(getFriendsCreator(friends)),
  };
};

const DialogListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogList);

export default DialogListContainer;

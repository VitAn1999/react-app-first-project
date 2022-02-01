import FriendsList from './FriendsList';
import { getFriendsCreator } from '../../../store/friends-list-reducer';
import { connect } from 'react-redux';

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
const FriendsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsList);

export default FriendsListContainer;

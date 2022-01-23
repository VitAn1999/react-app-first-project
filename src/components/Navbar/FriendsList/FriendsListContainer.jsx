import FriendsList from './FriendsList';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    friends: state.friendsData.friends,
  };
};
let mapDispatchToProps = () => {
  return {};
};
const FriendsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsList);

export default FriendsListContainer;

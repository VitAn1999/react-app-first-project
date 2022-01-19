import FriendsList from './FriendsList';

const FriendsListContainer = (props) => {
  let state = props.store.getState();

  return <FriendsList friends={state.userData.users} />;
};

export default FriendsListContainer;

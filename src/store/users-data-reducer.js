// action type
const filterFriends = 'filterFriends',
  getAllUsers = 'getAllUsers',
  toggleFollowed = 'toggleFollowed',
  getCurrentUser = 'getCurrentUser';

let initialState = {
  users: []
};

const usersDataReducer = (state = initialState, action) => {
  let copyState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case getAllUsers:
      copyState.users = [action.users];
      return copyState;
    case toggleFollowed:
      return (copyState.users = state.users.map((user) =>
        user.id === action.userId
          ? (user.followed = !user.followed)
          : user.followed
      ));

    // case getCurrentUser:
    //   let copyState = JSON.parse(JSON.stringify(state));
    //   console.log(copyState.users);

    //   return copyState;
    default:
      return state;
  }
};

// action creator
export const filterFriendsCreator = (followed) => ({
  type: filterFriends,
  followed
});
export const getAllUsersCreator = (users) => ({ type: getAllUsers, users });
export const getCurrentUserCreator = () => ({ type: getCurrentUser });
export const toggleFollowedCreator = (userId) => ({
  type: toggleFollowed,
  userId
});

export default usersDataReducer;

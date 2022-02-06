// action type
const getAllUsers = 'getAllUsers',
  toggleFollowed = 'toggleFollowed';

let initialState = {
  users: []
};

const usersDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case getAllUsers:
      return { ...state, users: [...action.users] };
    case toggleFollowed:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId
            ? { ...user, followed: !user.followed }
            : user
        )
      };
    default:
      return state;
  }
};

// action creator
export const getAllUsersCreator = (users) => ({ type: getAllUsers, users });
export const toggleFollowedCreator = (userId) => ({
  type: toggleFollowed,
  userId
});

export default usersDataReducer;

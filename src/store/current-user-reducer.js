// action type
const getCurrentUser = 'getCurrentUser';

let initialState = {
  currentUser: {}
};

const currentUserReducer = (state = initialState, action) => {
  // let copyState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case getCurrentUser:
      let currentUser = action.users.filter((user) => user.currentUser);
      // copyState.currentUser = {
      //   ...currentUser[0],
      //   ...currentUser[0].userInfo
      // };
      return {
        ...state,
        currentUser: {
          ...currentUser[0],
          ...currentUser[0].userInfo
        }
      };
    default:
      return state;
  }
};

// action creator
export const getCurrentUserCreator = (users) => ({
  type: getCurrentUser,
  users
});

export default currentUserReducer;

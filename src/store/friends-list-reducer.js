// action type
const getFriends = 'getFriends';

let initialState = {
  friends: [],
};

const friendsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case getFriends:
      return { ...state, friends: [...action.friends] };

    default:
      return state;
  }
};

// action creator
export const getFriendsCreator = (friends) => ({
  type: getFriends,
  friends,
});

export default friendsListReducer;

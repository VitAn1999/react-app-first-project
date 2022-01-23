// actions type
const addPost = 'addPost',
  changePost = 'changePost';

let initialState = {
  posts: [
    { id: 4, post: 'какулька', count: '5' },
    { id: 3, post: 'Бэтмен', count: '12' },
    { id: 2, post: 'какулька', count: '8' },
    { id: 1, post: 'Николас Кейдж', count: '15' },
  ],
  postValue: '',
};

const myPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost: {
      let post = {
        id: state.posts[0]['id'] + 1,
        post: state.postValue,
        count: 0,
      };
      return {
        ...state,
        posts: [post, ...state.posts],
        postValue: '',
      };
    }
    case changePost: {
      return { ...state, postValue: action.text };
    }
    default:
      return state;
  }
};

// actions creator
export const addPostCreator = () => ({ type: addPost });
export const changePostCreator = (text) => ({ type: changePost, text });

export default myPostReducer;

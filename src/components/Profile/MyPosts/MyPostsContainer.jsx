import MyPosts from './MyPosts';
import {
  addPostCreator,
  changePostCreator,
} from '../../../store/my-post-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.postData.posts,
    postValue: state.postData.postValue,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostCreator()),
    changePost: (text) => dispatch(changePostCreator(text)),
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

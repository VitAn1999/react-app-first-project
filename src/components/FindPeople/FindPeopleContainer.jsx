import FindPeople from './FindPeople';
import { connect } from 'react-redux';
import {
  getAllUsersCreator,
  toggleFollowedCreator
} from '../../store/users-data-reducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersData.users
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (users) => dispatch(getAllUsersCreator(users)),
    toggleFollowed: (userId) => dispatch(toggleFollowedCreator(userId))
  };
};

const FindPeopleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindPeople);

export default FindPeopleContainer;

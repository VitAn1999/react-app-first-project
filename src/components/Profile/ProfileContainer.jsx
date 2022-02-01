import { connect } from 'react-redux';
import Profile from './Profile';
import { getCurrentUserCreator } from '../../store/current-user-reducer';

const mapStateToProps = (state) => {
  return { currentUser: state.currentUserData.currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: (users) => dispatch(getCurrentUserCreator(users))
  };
};

let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;

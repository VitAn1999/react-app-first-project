import DialogList from './DialogList';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    users: state.userData.users,
  };
};

let mapDispatchToProps = () => {
  return;
};

const DialogListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogList);

export default DialogListContainer;

import DialogList from './DialogList';

const DialogListContainer = (props) => {
  let state = props.store.getState();

  return <DialogList users={state.userData.users} />;
};

export default DialogListContainer;

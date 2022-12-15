

const UserAction = (data, dispatch) => {
  dispatch({
    type: "USERS",
    payload: data,
  });
};

export default UserAction;
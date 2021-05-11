const pausedReducer = (state = false, action) => {
  switch (action.type) {
    case "PAUSE":
      return true;
    case "RESUME":
      return false;
    default:
      return state;
  }
};

export default pausedReducer;

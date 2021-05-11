import { ACTIONS } from "../Enums/Actions";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      const defaultIncrement = 1;
      const add = action.payload.number ? action.payload.number : defaultIncrement;
      return state + add;
    default:
      return state;
  }
};

export default counterReducer;

import counterReducer from "./counter";
import pausedReducer from "./isPaused";
import animationOptionsReducer from "./animationOptions";
import animationStateReducer from "./animationState";
import animationDataReducer from "./animationData";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isPaused: pausedReducer,
  animationOptions: animationOptionsReducer,
  animationState: animationStateReducer,
  animationData: animationDataReducer,
});

export default rootReducer;

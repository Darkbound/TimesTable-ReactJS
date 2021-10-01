import counterReducer from "./counter";
import pausedReducer from "./isPaused";
import animationOptionsReducer from "./animationOptions";
import animationStateReducer from "./animationState";
import speedModeReducer from "./speedMode";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isPaused: pausedReducer,
  animationOptions: animationOptionsReducer,
  animationState: animationStateReducer,
  speedMode: speedModeReducer,
});

export default rootReducer;

import { ACTIONS } from "../Enums/Actions";
import { Interval } from "../IntervalHandler";

const { PAUSE, START, RESUME, RESET } = ACTIONS.ANIMATION_STATE;

const initialState = {
  started: false,
  paused: false,
  intervalHandler: new Interval(),
};

const animationStateReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case START:
      return {
        ...state,
        started: payload.started,
      };
    case RESET:
      return {
        ...state,
        started: payload.started,
      };
    case PAUSE:
      return {
        ...state,
        paused: payload.paused,
      };
    case RESUME:
      return {
        ...state,
        paused: payload.paused,
      };

    default:
      return state;
  }
};

export default animationStateReducer;

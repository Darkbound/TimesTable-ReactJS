import { SPEED_MODES } from "../Enums/Actions";

const { VERY_FAST, FAST, NORMAL, SLOW, VERY_SLOW, MANUAL } = SPEED_MODES;

const initialState = {
  speedMode: NORMAL,
};

const speedModeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VERY_FAST:
      return {
        ...state,
        speedMode: VERY_FAST,
      };
    case FAST:
      return {
        ...state,
        speedMode: FAST,
      };
    case NORMAL:
      return {
        ...state,
        speedMode: NORMAL,
      };
    case SLOW:
      return {
        ...state,
        speedMode: SLOW,
      };
    case VERY_SLOW:
      return {
        ...state,
        speedMode: VERY_SLOW,
      };
    case MANUAL:
      return {
        ...state,
        speedMode: MANUAL,
      };

    default:
      return state;
  }
};

export default speedModeReducer;

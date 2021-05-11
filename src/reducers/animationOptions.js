import { ACTIONS } from "../Enums/Actions";

const { POINTS, TIMES, INCREMENTS, SPEED, FILL_COLOR, LINE_COLOR } = ACTIONS.ANIMATION_OPTIONS;

const initialState = {
  points: 500,
  times: 1,
  increments: 0.1,
  speed: 100,
  fillColor: "rgba(255, 255, 255, 1)",
  lineColor: "rgba(0, 0, 0, 1)",
};

const animationOptionsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POINTS:
      return {
        ...state,
        points: payload.points ? payload.points : initialState.points,
      };
    case TIMES:
      return {
        ...state,
        times: payload.times ? payload.times + state.increments : state.times + state.increments,
      };
    case INCREMENTS:
      return {
        ...state,
        increments: payload.increments ? payload.increments : initialState.increments,
      };
    case SPEED:
      return {
        ...state,
        speed: payload.speed ? payload.speed : initialState.speed,
      };
    case FILL_COLOR:
      return {
        ...state,
        fillColor: payload.fillColor ? payload.fillColor : initialState.fillColor,
      };
    case LINE_COLOR:
      return {
        ...state,
        lineColor: payload.lineColor ? payload.lineColor : initialState.lineColor,
      };
    default:
      return state;
  }
};

export default animationOptionsReducer;

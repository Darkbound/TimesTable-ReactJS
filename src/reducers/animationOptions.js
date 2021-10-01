import { ACTIONS, COLORING_MODES } from "../Enums/Actions";

const { POINTS, TIMES, INCREMENTS, SPEED, FILL_COLOR, LINE_COLOR, LINE_WIDTH, RAINBOW_EVERY_NTH_LINE, COLORING_MODE } =
  ACTIONS.ANIMATION_OPTIONS;

const { STATIC } = COLORING_MODES;

const initialState = {
  points: 500,
  times: 1,
  increments: 0.1,
  speed: 100,
  fillColor: "rgba(255, 255, 255, 1)",
  lineColor: "rgba(0, 0, 0, 1)",
  lineWidth: 1,
  rainbowEveryNthLine: 1,
  coloringMode: STATIC,
};

const animationOptionsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POINTS:
      return {
        ...state,
        points: payload?.points || initialState.points,
      };
    case TIMES:
      return {
        ...state,
        times: payload?.times + state.increments || state.times + state.increments,
      };
    case INCREMENTS:
      return {
        ...state,
        increments: payload?.increments || initialState.increments,
      };
    case SPEED:
      return {
        ...state,
        speed: payload?.speed || initialState.speed,
      };
    case FILL_COLOR:
      return {
        ...state,
        fillColor: payload?.fillColor || initialState.fillColor,
      };
    case LINE_COLOR:
      return {
        ...state,
        lineColor: payload?.lineColor || initialState.lineColor,
      };
    case LINE_WIDTH:
      return {
        ...state,
        lineWidth: payload?.lineWidth || initialState.lineWidth,
      };
    case RAINBOW_EVERY_NTH_LINE:
      return {
        ...state,
        lineWidth: payload?.rainbowEveryNthLine || initialState.rainbowEveryNthLine,
      };
    case COLORING_MODE:
      return { ...state, coloringMode: payload?.coloringMode || initialState.coloringMode };

    default:
      return state;
  }
};

export default animationOptionsReducer;

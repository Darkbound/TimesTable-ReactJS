import { ACTIONS } from "../Enums/Actions";

const { POINTS, TIMES, INCREMENTS, SPEED, FILL_COLOR, LINE_COLOR, COLORING_MODE } = ACTIONS.ANIMATION_OPTIONS;

export const setTimes = (times) => {
  return {
    type: TIMES,
    payload: {
      ...(times && { times }),
    },
  };
};

export const setPoints = (points) => {
  return {
    type: POINTS,
    payload: {
      ...(points && { points }),
    },
  };
};

export const setIncrements = (increments) => {
  return {
    type: INCREMENTS,
    payload: {
      ...(increments && { increments }),
    },
  };
};
export const setSpeed = (speed) => {
  return {
    type: SPEED,
    payload: {
      ...(speed && { speed }),
    },
  };
};

export const setFillColor = (fillColor) => {
  return (dispatch, getState) => {
    const {
      animationState: { paused },
    } = getState();

    !paused &&
      dispatch({
        type: FILL_COLOR,
        payload: {
          ...(fillColor && { fillColor }),
        },
      });
  };
};

export const setLineColor = (lineColor) => {
  return (dispatch, getState) => {
    const {
      animationState: { paused },
    } = getState();

    !paused &&
      dispatch({
        type: LINE_COLOR,
        payload: {
          ...(lineColor && { lineColor }),
        },
      });
  };
};
export const setColoringMode = ({ coloringMode }) => ({
  type: COLORING_MODE,
  payload: { coloringMode },
});

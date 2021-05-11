import { ACTIONS } from "../Enums/Actions";

const { POINTS, TIMES, INCREMENTS, SPEED, FILL_COLOR, LINE_COLOR } = ACTIONS.ANIMATION_OPTIONS;

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
  return {
    type: FILL_COLOR,
    payload: {
      ...(fillColor && { fillColor }),
    },
  };
};
export const setLineColor = (lineColor) => {
  console.log(lineColor);
  return {
    type: LINE_COLOR,
    payload: {
      ...(lineColor && { lineColor }),
    },
  };
};

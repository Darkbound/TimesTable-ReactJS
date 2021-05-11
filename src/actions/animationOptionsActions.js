import { ACTIONS } from "../Enums/Actions";
import { setAnimationData } from "./animationDataActions";

const { POINTS, TIMES, INCREMENTS, SPEED, FILL_COLOR, LINE_COLOR } = ACTIONS.ANIMATION_OPTIONS;

const setTimes = (times) => {
  return {
    type: TIMES,
    payload: {
      ...(times && { times }),
    },
  };
};

const setPoints = (points) => {
  return {
    type: POINTS,
    payload: {
      ...(points && { points }),
    },
  };
};

const setIncrements = (increments) => {
  return {
    type: INCREMENTS,
    payload: {
      ...(increments && { increments }),
    },
  };
};
const setSpeed = (speed) => {
  return {
    type: SPEED,
    payload: {
      ...(speed && { speed }),
    },
  };
};

const setFillColor = (fillColor) => {
  return (dispatch, getState) => {
    const {
      animationData,
      animationState: { paused },
    } = getState();

    const getAnimationDataWithNewFillColor = (animationData, newFillColor) => {
      const newData = animationData;
      newData.datasets[0].backgroundColor = newFillColor;

      return newData.datasets;
    };

    paused
      ? dispatch(setAnimationData(getAnimationDataWithNewFillColor(animationData, fillColor)))
      : dispatch({
          type: FILL_COLOR,
          payload: {
            ...(fillColor && { fillColor }),
          },
        });
  };
};

const setLineColor = (lineColor) => {
  return (dispatch, getState) => {
    const {
      animationData,
      animationState: { paused },
    } = getState();

    const getAnimationDataWithNewLineColor = (animationData, newLineColor) => {
      return animationData.datasets.map((dataset, index) => {
        if (index === 0) {
          return dataset;
        } else {
          dataset.borderColor = newLineColor;
          return dataset;
        }
      });
    };

    paused
      ? dispatch(setAnimationData(getAnimationDataWithNewLineColor(animationData, lineColor)))
      : dispatch({
          type: LINE_COLOR,
          payload: {
            ...(lineColor && { lineColor }),
          },
        });
  };
};

export { setFillColor, setIncrements, setPoints, setSpeed, setTimes, setLineColor };

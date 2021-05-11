import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { setTimes } from "../../actions/animationOptionsActions";
import { setStarted, setPaused } from "../../actions/animationStateActions";

export default function ChartStateControls() {
  const dispatch = useDispatch();
  const { speed } = useSelector((state) => state.animationOptions, shallowEqual);
  const { paused, started, intervalHandler } = useSelector((state) => state.animationState, shallowEqual);

  const handlePause = () => {
    !paused ? pauseVisualizationHandler() : resumeVisualizationHandler();
    dispatch(setPaused(!paused));
  };

  const handleReset = () => {
    intervalHandler.destroy();
    dispatch(setTimes(1));
    dispatch(setStarted(false));
    dispatch(setPaused(false));
  };

  const startVisualizationHandler = () => {
    intervalHandler.setOptions({
      speed,
      callback: () => {
        dispatch(setTimes());
      },
    });
  };

  const pauseVisualizationHandler = () => {
    intervalHandler.destroy();
  };

  const resumeVisualizationHandler = () => {
    startVisualizationHandler();
  };
  return (
    <>
      {!started ? (
        <button
          id={"vishandler"}
          onClick={() => {
            dispatch(setStarted(true));
            startVisualizationHandler();
          }}
        >
          START
        </button>
      ) : (
        <>
          <button id={"pausehandler"} onClick={handlePause}>
            {paused ? `RESUME` : `PAUSE`}
          </button>
          <button id={"resethandler"} onClick={handleReset}>
            RESET
          </button>
        </>
      )}
    </>
  );
}

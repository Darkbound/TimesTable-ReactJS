import { ACTIONS } from "../Enums/Actions";

const { PAUSE, START, RESUME, RESET } = ACTIONS.ANIMATION_STATE;

const setPaused = (paused) => {
  return paused
    ? {
        type: PAUSE,
        payload: { paused },
      }
    : {
        type: RESUME,
        payload: { paused },
      };
};

const setStarted = (started) => {
  return started
    ? {
        type: START,
        payload: { started },
      }
    : {
        type: RESET,
        payload: { started },
      };
};

export { setPaused, setStarted };

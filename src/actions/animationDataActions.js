import { ACTIONS } from "../Enums/Actions";

const { UPDATE } = ACTIONS.ANIMATION_DATA;

const setAnimationData = (data) => {
  return {
    type: UPDATE,
    payload: { datasets: [...data] },
  };
};

export { setAnimationData };

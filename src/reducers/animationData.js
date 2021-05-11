import { ACTIONS } from "../Enums/Actions";
import { generateRadiansArray } from "../mathRadiansHelper";

const { UPDATE } = ACTIONS.ANIMATION_DATA;

const R = 1;
const circleDataArray = generateRadiansArray(R, 0, 360, 360 / 500);

const circleData = {
  label: "OUTER_CIRCLE",
  lineTension: 0.4,
  fill: true,
  borderColor: "rgba(75,192,192,1)",
  backgroundColor: "rgba(255, 255, 255, 1)",
  data: circleDataArray,
};

const defaultAnimationDataState = { datasets: [circleData] };

const animationDataReducer = (state = defaultAnimationDataState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE:
      const newDatasets = payload.datasets ? payload.datasets : defaultAnimationDataState.datasets;

      return {
        ...state,
        datasets: [circleData, ...newDatasets],
      };
    default:
      return state;
  }
};

export default animationDataReducer;

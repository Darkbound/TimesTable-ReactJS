import styled from "styled-components";
import { defaults, Line } from "react-chartjs-2";

const defaultLineOptions = defaults.global.elements.line;
const lineOptions = {
  tension: 0,
  borderColor: "rgba(0,0,0,1)",
  borderWidth: 1,
  fill: true,
};

defaults.global.elements.line = { ...defaultLineOptions, ...lineOptions };

const options = {
  aspectRatio: 1,
  animation: {
    duration: 0,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: { display: false },
        color: `rgba(0,0,0,0)`,
        type: "linear",
        position: "bottom",
        ticks: {
          min: -1.2,
          max: 1.2,
          stepSize: 0.1,
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: { display: false },
        type: "linear",
        position: "bottom",
        ticks: {
          min: -1.2,
          max: 1.2,
          stepSize: 0.1,
          display: false,
        },
      },
    ],
  },
};

export const StyledLine = styled((props) => <Line {...props} options={options} />)``;

export const StyledDivLineContainer = styled.div`
  height: ${({ height }) => height};
  max-height: ${({ height }) => height};
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  display: inline-block;
  border: 1px solid black;
`;

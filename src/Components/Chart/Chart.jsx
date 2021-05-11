import React from "react";
import { defaults, Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { generateRadiansArray } from "../../mathRadiansHelper";

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

export default function Chart() {
  const animationData = useSelector((state) => state.animationData);

  return (
    <div
      style={{
        maxHeight: 400,
        maxWidth: 400,
        height: 400,
        width: 400,
        display: "inline-block",
        border: "1px solid black",
      }}
    >
      <Line data={animationData} options={options} width={null} height={null} />
    </div>
  );
}

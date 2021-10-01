import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setTimes, setLineColor, setFillColor } from "../../../actions/animationOptionsActions";
import { chartOptions } from "./chartOptions";
import {
  getAngleOfPointOnCircle,
  getAngleStep,
  generateRadiansArray,
  generateRangeArray,
  generateRandomRgbaColorsArray,
} from "../../../helpers";

import { COLORING_MODES } from "../../../Enums/Actions";

const { ALTERNATING, RAINBOW } = COLORING_MODES;

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

const handleAlternatingColors = ({ counter, lineColor, fillColor, dispatch }) => {
  if (counter % 5 === 0) {
    dispatch(setFillColor(lineColor));
    dispatch(setLineColor(fillColor));
  }
};

export const Chart = () => {
  const [animationData, setAnimationData] = useState([circleData]);
  const dispatch = useDispatch();

  const { started, paused, intervalHandler } = useSelector((state) => state.animationState, shallowEqual);
  const { speed, points, times, increments, fillColor, lineColor, lineWidth, coloringMode, rainbowEveryNthLine } =
    useSelector((state) => state.animationOptions, shallowEqual);

  useEffect(() => {
    const changeIntervalHandlerSpeed = ({ speed }) => {
      intervalHandler.destroy();
      intervalHandler.setOptions({ speed });
    };

    started && changeIntervalHandlerSpeed({ speed });
    //eslint-ignore-next-line
  }, [speed]);

  useEffect(() => {
    started && intervalHandler.setCallback(() => dispatch(setTimes()));
    //eslint-ignore-next-line
  }, [increments]);

  useEffect(() => {
    started && updateDatasets();
    //eslint-ignore-next-line
  }, [times]);

  // useeffects for fill/line color changes to change color if chart is paused

  const handleRainbowColors = ({ colorsAmount }) => {
    return generateRandomRgbaColorsArray(colorsAmount);
  };

  const updateDatasets = () => {
    let timesTable = calculateTimesTableDataset(0, points, times);

    setAnimationData(timesTable);
  };

  const calculateTimesTableDataset = (start, end, times) => {
    intervalHandler.counter++;

    coloringMode === ALTERNATING &&
      handleAlternatingColors({ counter: intervalHandler.counter, lineColor, fillColor, dispatch });
    const randomColors = coloringMode === RAINBOW && handleRainbowColors({ colorsAmount: points });

    const pointsOfTable = generateRangeArray(start, end);
    const datasets = [animationData[0]];

    datasets[0].backgroundColor = fillColor;

    const lineOptions = ({ paused, lineColor }) => !paused && { borderColor: lineColor };
    // lineWidth
    // rainbowvize every Xth line
    // next frame
    // prev frame

    for (let i = 1; i < pointsOfTable.length; i++) {
      datasets.push({
        label: `${i}`,
        ...(coloringMode === RAINBOW && i % rainbowEveryNthLine === 0
          ? lineOptions({ paused, lineColor: randomColors[i] })
          : lineOptions({ paused, lineColor })),
        borderWidth: lineWidth,
        data: [
          {
            x: Math.cos(getAngleOfPointOnCircle(pointsOfTable[i], getAngleStep(end))),
            y: Math.sin(getAngleOfPointOnCircle(pointsOfTable[i], getAngleStep(end))),
          },
          {
            x: Math.cos(getAngleOfPointOnCircle(pointsOfTable[i] * times, getAngleStep(end))),
            y: Math.sin(getAngleOfPointOnCircle(pointsOfTable[i] * times, getAngleStep(end))),
          },
        ],
      });
    }

    return datasets;
  };

  return (
    <div
      style={{
        maxHeight: 700,
        maxWidth: 700,
        height: 700,
        width: 700,
        display: "inline-block",
      }}
    >
      <Line data={{ datasets: animationData }} options={chartOptions} width={null} height={null} />
    </div>
  );
};

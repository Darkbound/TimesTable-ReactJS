import React, { useEffect } from "react";
import ColorPicker from "./Components/ColorPicker";
import Controls from "./Components/Controls";
import Chart from "./Components/Chart/Chart";
import ChartStateControls from "./Components/Chart/ChartStateControls";
import { getAngleOfPointOnCircle, getAngleStep } from "./mathRadiansHelper";
import { generateRangeArray } from "./mathArraysHelper";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  setSpeed,
  setPoints,
  setTimes,
  setIncrements,
  setLineColor,
  setFillColor,
} from "./actions/animationOptionsActions";
import { setAnimationData } from "./actions/animationDataActions";

function App() {
  const dispatch = useDispatch();

  const animationData = useSelector((state) => state.animationData, shallowEqual);
  const { started, paused, intervalHandler } = useSelector((state) => state.animationState, shallowEqual);
  const { speed, points, increments, fillColor, lineColor, times } = useSelector(
    (state) => state.animationOptions,
    shallowEqual
  );

  useEffect(() => {
    started &&
      (() => {
        intervalHandler.destroy();
        intervalHandler.setOptions({ speed });
      })();
  }, [speed]);

  useEffect(() => {
    started && intervalHandler.setCallback(() => dispatch(setTimes()));
  }, [increments]);

  useEffect(() => {
    started && updateDatasets();
  }, [times]);

  const updateDatasets = () => {
    let timesTable = calculateTimesTableDataset(0, points, times);

    dispatch(setAnimationData(timesTable));
  };

  const calculateTimesTableDataset = (start, end, times) => {
    const pointsOfTable = generateRangeArray(start, end);
    const datasets = [animationData.datasets[0]];
    datasets[0].backgroundColor = fillColor;

    const lineOptions = {
      ...(!paused && { borderColor: lineColor }),
    };

    for (let i = 1; i < pointsOfTable.length; i++) {
      datasets.push({
        label: `${i}`,
        ...lineOptions,
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

  const setLineColorWrapper = ({ rgb: { r, g, b, a } }) => {
    const newColor = `rgba(${r},${g},${b},${a})`;
    dispatch(setLineColor(newColor));
  };

  const setFillColorWrapper = ({ rgb: { r, g, b, a } }) => {
    const newColor = `rgba(${r},${g},${b},${a})`;
    dispatch(setFillColor(newColor));
  };

  const handleSetAnimationOptions = ({ pointsRef, speedRef, incrementRef }) => {
    const {
      current: { value: pointsVal },
    } = pointsRef;
    const {
      current: { value: speedVal },
    } = speedRef;
    const {
      current: { value: incrementVal },
    } = incrementRef;

    pointsVal && dispatch(setPoints(parseInt(pointsVal)));
    speedVal && dispatch(setSpeed(parseInt(speedVal)));
    incrementVal && dispatch(setIncrements(parseFloat(incrementVal)));
  };

  return (
    <>
      <div className={"container"} style={{ display: "flex" }}>
        <ChartStateControls />
        <Chart />
        <div style={{ display: "inline-block", top: 0, position: "absolute" }}>
          <div>
            <ColorPicker text={`line`} setColorWrapper={setLineColorWrapper} />
          </div>
          <div>
            <ColorPicker text={`fill`} setColorWrapper={setFillColorWrapper} />
          </div>
        </div>
        <div>Times: {times}</div>
        <div>Speed: {speed}</div>
        <div>Points: {points}</div>
        <div>Increment: {increments}</div>
        <Controls handleSetAnimationOptions={handleSetAnimationOptions} />
      </div>
    </>
  );
}

export default App;

// { ...(condition && { propname: propvalue }) }, // https://medium.com/@mikeh91/conditionally-adding-keys-to-javascript-objects-using-spread-operators-and-short-circuit-evaluation-acf157488ede

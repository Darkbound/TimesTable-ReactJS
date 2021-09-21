import React, { useEffect } from "react";
import ColorPicker from "./Components/ColorPicker";
import Controls from "./Components/Controls";
import Chart from "./Components/Chart/Chart";
import ChartStateControls from "./Components/Chart/ChartStateControls";
import { getAngleOfPointOnCircle, getAngleStep } from "./mathRadiansHelper";
import { generateRangeArray } from "./mathArraysHelper";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setTimes, setLineColor, setFillColor } from "./actions/animationOptionsActions";
import { setAnimationData } from "./actions/animationDataActions";

import styled from "styled-components";

import { Layout, Row, Col } from "antd";

const { Header, Footer, Sider, Content } = Layout;

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

  const setLineColorWrapper = (newColor) => {
    dispatch(setLineColor(newColor));
  };

  const setFillColorWrapper = (newColor) => {
    dispatch(setFillColor(newColor));
  };

  return (
    <StyledContentLayout>
      <Header>Header</Header>
      <Layout>
        <Sider width={200}>Sider</Sider>
        <StyledContent>
          <Row>
            <Col span={11} offset={1}>
              <Chart />
            </Col>
            <Col span={11}>
              <Row>
                <Col span={24}>
                  <ChartStateControls />
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <Controls />
                </Col>
              </Row>
              <Row>
                <Col span={11}>
                  <ColorPicker currentColor={lineColor} text={`line`} setColorWrapper={setLineColorWrapper} />
                </Col>
                <Col span={11} offset={1}>
                  <ColorPicker currentColor={fillColor} text={`fill`} setColorWrapper={setFillColorWrapper} />
                </Col>
              </Row>
            </Col>
          </Row>
        </StyledContent>
      </Layout>
      <Footer>Footer</Footer>
    </StyledContentLayout>
  );
}

const StyledContent = styled((props) => <Content {...props} />)`
  margin: 1rem;
`;

const StyledContentLayout = styled((props) => <Layout {...props} />)`
  background-color: white;
`;

export default App;

// { ...(condition && { propname: propvalue }) }, // https://medium.com/@mikeh91/conditionally-adding-keys-to-javascript-objects-using-spread-operators-and-short-circuit-evaluation-acf157488ede

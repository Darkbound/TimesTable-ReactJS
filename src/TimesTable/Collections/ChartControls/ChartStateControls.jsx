import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { setTimes } from "../../../actions/animationOptionsActions";
import { setStarted, setPaused } from "../../../actions/animationStateActions";

import { Row, Col, Typography } from "antd";

import { Button } from "../../../Components";

import styled from "styled-components";
import { ColoringMode } from "./ColoringMode";

const { Title } = Typography;

export function ChartStateControls() {
  const dispatch = useDispatch();
  const { speed, points, increments, lineColor, fillColor } = useSelector(
    (state) => state.animationOptions,
    shallowEqual
  );
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
    dispatch(setStarted(true));
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
      <Row>
        <Col span={24}>
          <Title level={3}>Main Controls: </Title>
        </Col>
      </Row>
      <ChartStateControlsRow>
        {!started ? (
          <Col span={10}>
            <StateControlButton onClick={startVisualizationHandler}>START</StateControlButton>
          </Col>
        ) : (
          <>
            <Col span={10}>
              <StateControlButton onClick={handlePause}>{paused ? `RESUME` : `PAUSE`}</StateControlButton>
            </Col>
            <Col span={10} offset={1}>
              <StateControlButton danger onClick={handleReset}>
                RESET
              </StateControlButton>
            </Col>
          </>
        )}
      </ChartStateControlsRow>

      <Row>
        <Col span={24}>
          <Row>
            <Title level={3}>Current Values:</Title>
          </Row>
          <Row>
            <Col span={24}>
              <Row>
                <Title level={5}>Density of Lines: {points}</Title>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Row>
                <Title level={5}>Render frame every: {speed.toFixed(3)}ms</Title>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Row>
                <Title level={5}>Next frame increments: {increments.toFixed(3)}</Title>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={9}>
              <Title level={5}>Line Color:</Title>
            </Col>
            <Col span={15}>
              <Title level={5}>{lineColor}</Title>
            </Col>
          </Row>
          <Row>
            <Col span={9}>
              <Title level={5}>Fill Color:</Title>
            </Col>
            <Col span={15}>
              <Title level={5}>{fillColor}</Title>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <ColoringMode />
        </Col>
      </Row>
    </>
  );
}

const ChartStateControlsRow = styled((props) => <Row {...props} />)`
  margin: 0px 0px 10px 0px;
`;

const StateControlButton = styled((props) => <Button {...props} block size="large" type="primary" />)``;

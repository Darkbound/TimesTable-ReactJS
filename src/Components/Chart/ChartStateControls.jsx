import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { setTimes } from "../../actions/animationOptionsActions";
import { setStarted, setPaused } from "../../actions/animationStateActions";

import { Row, Col, Typography } from "antd";

import { Button } from "../RestyledComponents/Button";

import styled from "styled-components";

const { Title } = Typography;

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
        <Title level={3}>Main Controls: </Title>
      </Row>
      <ChartStateControlsRow>
        {!started ? (
          <Col span={6}>
            <StateControlButton id={"vishandler"} onClick={startVisualizationHandler}>
              START
            </StateControlButton>
          </Col>
        ) : (
          <>
            <Col span={6}>
              <StateControlButton id={"pausehandler"} onClick={handlePause}>
                {paused ? `RESUME` : `PAUSE`}
              </StateControlButton>
            </Col>
            <Col span={6} offset={1}>
              <StateControlButton danger id={"resethandler"} onClick={handleReset}>
                RESET
              </StateControlButton>
            </Col>
          </>
        )}
      </ChartStateControlsRow>
    </>
  );
}

const ChartStateControlsRow = styled((props) => <Row {...props} />)`
  margin: 0px 0px 10px 0px;
`;

const StateControlButton = styled((props) => <Button {...props} block size="large" type="primary" />)``;

import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { setIncrements, setPoints, setSpeed } from "../actions/animationOptionsActions";
import { ValueIncrementer } from "./ValueIncrementer";

import { Typography, Col, Row } from "antd";

const { Title } = Typography;

export default function Controls() {
  const { points, speed, increments } = useSelector((state) => state.animationOptions, shallowEqual);

  return (
    <Col>
      <Row>
        <Col span={24}>
          <Row>
            <Title level={3}>Periphery Points: {points}</Title>
          </Row>
        </Col>
        <Col span={24}>
          <PointsIncrementer points={points} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Row>
            <Title level={3}>Animation Speed: {speed}</Title>
          </Row>
        </Col>
        <Col span={24}>
          <SpeedIncrementer speed={speed} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Row>
            <Title level={3}>Next frame increments: {increments}</Title>
          </Row>
        </Col>
        <Col span={24}>
          <IncrementsIncrementer increments={increments} />
        </Col>
      </Row>
    </Col>
  );
}

const PointsIncrementer = ({ points }) => (
  <ValueIncrementer
    defaultIncrements={[10, 50, 150]}
    nonStandardIncrements={[1, 20, 100, 300, 500, 1000]}
    valueChangingActionToDispatch={setPoints}
    currentValue={points}
    min={10}
    max={1000}
  />
);

const SpeedIncrementer = ({ speed }) => (
  <ValueIncrementer
    nonStandardIncrements={[0.001, 0.01, 0.05, 0.5, 5, 25, 50, 100]}
    defaultIncrements={[0.1, 1, 10]}
    valueChangingActionToDispatch={setSpeed}
    currentValue={speed}
    min={0.001}
    max={100}
  />
);

const IncrementsIncrementer = ({ increments }) => (
  <ValueIncrementer
    nonStandardIncrements={[0.001, 0.01, 0.05, 0.5, 5, 25, 50, 100]}
    defaultIncrements={[0.1, 1, 10]}
    valueChangingActionToDispatch={setIncrements}
    currentValue={increments}
    min={0.001}
    max={100}
  />
);

import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { PointsIncrementer, SpeedIncrementer, IncrementsIncrementer } from "../ValueIncrementer";
import { Typography, Col, Row } from "antd";

const { Title } = Typography;

export function Controls() {
  const { points, speed, increments } = useSelector((state) => state.animationOptions, shallowEqual);

  return (
    <Col>
      <Row>
        <Col span={24}>
          <Row>
            <Title level={4}>Density of Lines: {points}</Title>
          </Row>
        </Col>
        <Col span={24}>
          <PointsIncrementer />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Row>
            <Title level={4}>Render frame every: {speed.toFixed(3)}ms</Title>
          </Row>
        </Col>
        <Col span={24}>
          {" "}
          <SpeedIncrementer />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Row>
            <Title level={4}>Next frame increments: {increments.toFixed(4)}</Title>
          </Row>
        </Col>
        <Col span={24}>
          <IncrementsIncrementer />
        </Col>
      </Row>
    </Col>
  );
}

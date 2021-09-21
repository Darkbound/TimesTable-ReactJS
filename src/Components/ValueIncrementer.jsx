import { useState } from "react";
import { useDispatch } from "react-redux";

import { Select, Row, Col, Typography } from "antd";

import { Button } from "./RestyledComponents/Button";

const { Option } = Select;

const { Title } = Typography;

const selectStyles = ({ nonStandardIncrements, step }) => ({
  width: "100%",
  height: 40,
  border: nonStandardIncrements.some((increments) => increments === step) ? "1px solid blue" : "",
});

export const ValueIncrementer = ({
  valueChangingActionToDispatch,
  currentValue,
  min,
  max,
  defaultIncrements,
  nonStandardIncrements,
}) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(defaultIncrements[0]);

  const handleIncrementing = () => {
    const newValue = currentValue + step;
    dispatch(valueChangingActionToDispatch(newValue > max ? max : newValue));
  };
  const handleDecrementing = () => {
    const newValue = currentValue - step;

    dispatch(valueChangingActionToDispatch(newValue < min ? min : newValue));
  };

  const handleSetStepOnClick = (newStep) => {
    setStep(newStep);
  };

  const handleNonStandardSetStepSelectOnSelect = (value) => {
    setStep(value);
  };

  return (
    <>
      <Row style={{ marginBottom: 10 }}>
        {nonStandardIncrements?.length > 0 && (
          <Col span={5}>
            <Select
              size="large"
              defaultValue="Other steps"
              value={nonStandardIncrements.find((incr) => incr === step) ? step : "Other steps"}
              style={selectStyles({ nonStandardIncrements, step })}
              onSelect={handleNonStandardSetStepSelectOnSelect}
            >
              {nonStandardIncrements.map((nonStandardIncrement, index) => (
                <Option key={`option${index}value${nonStandardIncrement}`} value={nonStandardIncrement}>
                  x{nonStandardIncrement}
                </Option>
              ))}
            </Select>
          </Col>
        )}

        {defaultIncrements?.length > 0 &&
          defaultIncrements.map(
            (defaultIncrement, index) =>
              index < 3 && (
                <Col key={`incrementbtn${index}${defaultIncrement}`} span={4} offset={1}>
                  <IncrementsButton
                    step={step}
                    increment={defaultIncrement}
                    handleSetStepOnClick={handleSetStepOnClick}
                  />
                </Col>
              )
          )}
      </Row>
      <Row>
        <Col span={5} offset={2}>
          <Button style={{ fontSize: 25 }} size="large" onClick={handleIncrementing}>
            +
          </Button>
        </Col>
        <Col span={5} offset={6}>
          <Button size="large" onClick={handleDecrementing}>
            <Title level={3}>-</Title>
          </Button>
        </Col>
      </Row>
    </>
  );
};

const IncrementsButton = ({ step, increment, handleSetStepOnClick }) => {
  const currentlySelected = step === increment;
  return (
    <Button
      size="large"
      type={currentlySelected ? "primary" : "default"}
      onClick={() => {
        handleSetStepOnClick(increment);
      }}
    >
      <Title level={4} style={{ color: currentlySelected ? "white" : "black" }}>
        x{increment}
      </Title>
    </Button>
  );
};

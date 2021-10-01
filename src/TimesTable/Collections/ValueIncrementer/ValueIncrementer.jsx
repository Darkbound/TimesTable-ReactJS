import { useState } from "react";
import { useDispatch } from "react-redux";

import { Row, Col } from "antd";

import { IncrementsButton } from "./IncrementsButton";
import {
  StyledPlusButton,
  StyledMinusButton,
  StyledPlusOutlined,
  StyledMinusOutlined,
  StyledSelect,
  StyledOption,
} from "./elements";

export const ValueIncrementer = ({
  valueChangingActionToDispatch,
  currentValue,
  min,
  max,
  defaultIncrements,
  nonStandardIncrements,
  onIncrement = () => {},
  onDecrement = () => {},
}) => {
  const dispatch = useDispatch();

  const [step, setStep] = useState(defaultIncrements[0]);

  const handleIncrementing = () => {
    const newValue = currentValue + step;
    dispatch(valueChangingActionToDispatch(newValue > max ? max : newValue));
    onIncrement();
  };
  const handleDecrementing = () => {
    const newValue = currentValue - step;

    dispatch(valueChangingActionToDispatch(newValue < min ? min : newValue));
    onDecrement();
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
          <Col span={8}>
            <StyledSelect
              size="large"
              defaultValue="Other steps"
              value={nonStandardIncrements.find((incr) => incr === step) ? step : "Other steps"}
              onSelect={handleNonStandardSetStepSelectOnSelect}
            >
              {nonStandardIncrements.map((nonStandardIncrement, index) => (
                <StyledOption key={`option${index}value${nonStandardIncrement}`} value={nonStandardIncrement}>
                  x{nonStandardIncrement}
                </StyledOption>
              ))}
            </StyledSelect>
          </Col>
        )}

        {defaultIncrements?.length > 0 &&
          defaultIncrements.map(
            (defaultIncrement, index) =>
              index < 3 && (
                <Col key={`incrementbtn${index}${defaultIncrement}`} span={4} style={{ marginLeft: 10 }}>
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
          <StyledPlusButton onClick={handleIncrementing}>
            <StyledPlusOutlined />
          </StyledPlusButton>
        </Col>
        <Col span={5} offset={6}>
          <StyledMinusButton onClick={handleDecrementing}>
            <StyledMinusOutlined />
          </StyledMinusButton>
        </Col>
      </Row>
    </>
  );
};

import styled from "styled-components";
import { CheckCircleOutlined } from "../../../assets";
import { Col, Row, RadioGroup, RadioButton, Space, Title } from "../../../Components";

export const StyledTitle = styled((props) => <Title {...props} />)``;

export const StyledCol = styled((props) => <Col {...props} />)``;

export const StyledRow = styled((props) => <Row {...props} />)``;

export const StyledVerticalSpace = styled((props) => <Space {...props} direction="vertical" />)``;

export const StyledRadioGroup = styled((props) => <RadioGroup {...props} size="large" />)``;

export const StyledRadioButton = styled((props) => <RadioButton {...props} />)`
  width: 80px;
  height: 100%;
  margin-right: 5px;
  &:not(:first-child)::before {
    width: 0px;
  }
`;

export const StyledRadioButtonStaticColorMode = styled(({ lineColor, fillColor, ...props }) => (
  <StyledRadioButton {...props} />
))`
  border: 2px solid ${({ lineColor }) => lineColor} !important;
  background-color: ${({ fillColor }) => fillColor};
  &.ant-radio-button-wrapper-checked {
    border: 2px solid ${({ lineColor }) => lineColor} !important;
    background-color: ${({ fillColor }) => fillColor};
  }
`;

export const StyledRadioButtonAlternatingColorMode = styled(({ lineColor, fillCOlor, ...props }) => (
  <StyledRadioButton {...props} />
))`
  border: 2px solid ${({ lineColor }) => lineColor} !important;
  background-color: ${({ fillColor }) => fillColor};

  &.ant-radio-button-wrapper-checked,
  &.ant-radio-button-wrapper {
    padding: 0;
  }
  & span:nth-child(2) > div {
    display: inline-block;
    height: 38px;
    width: 76px;
  }
`;

export const StyledAlternatingBlock = styled(({ index, lineColor, fillColor, ...props }) => <div {...props} />)`
  position: absolute;
  top: 0;
  left: ${({ index }) => index * 9.5}px;
  width: 10px;
  height: 36px;
  display: inline-block;
  background: linear-gradient(
    90deg,
    ${({ index, lineColor, fillColor }) => (index % 2 === 0 ? lineColor : fillColor)},
    ${({ index, lineColor, fillColor }) => (index % 2 === 0 ? fillColor : lineColor)}
  );

  background-size: 200% 200% !important;
  -webkit-animation: rainbow 2s steps(1) infinite;
  -z-animation: rainbow 2s steps(1) infinite;
  -o-animation: rainbow 2s steps(1) infinite;
  animation: rainbow 2s steps(1) infinite;

  @-webkit-keyframes rainbow {
    0% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
  @-moz-keyframes rainbow {
    0% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
  @-o-keyframes rainbow {
    0% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
  @keyframes rainbow {
    0% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
`;

export const StyledRadioButtonRainbowColorMode = styled((props) => <StyledRadioButton {...props} />)`
  border: 2px solid !important;
  padding: 0;
`;

export const StyledRainbowBlock = styled((props) => <div {...props} />)`
  width: 76px;
  height: 36px;
  background: linear-gradient(90deg, #ff2400, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3);
  background-size: 1800% 1800% !important;

  -webkit-animation: rainbow 10s ease infinite;
  -z-animation: rainbow 10s ease infinite;
  -o-animation: rainbow 10s ease infinite;
  animation: rainbow 10s ease infinite;

  @-webkit-keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @-moz-keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @-o-keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
`;

export const StyledCheckCircleOutlined = styled((props) => <CheckCircleOutlined {...props} />)`
  position: absolute;
  left: 72%;
  top: 40%;
  font-size: 20px;
  filter: invert(100%);
`;

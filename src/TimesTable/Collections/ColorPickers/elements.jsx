import styled, { css } from "styled-components";
import { BgColorsOutlined, HighlightFilled, HighlightOutlined } from "../../../assets";
import { Col, Row, Slider, InputNumber } from "../../../Components";

export const StyledBGColorsOutlinedIcon = styled(({ colorPickerOpened, ...props }) => <BgColorsOutlined {...props} />)`
  font-size: 40px;
  color: ${({ colorPickerOpened }) => (colorPickerOpened ? "red" : "green")};
  &:hover {
    font-size: 45px;
    color: red;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: darkgray;
      &:hover {
        color: darkgray;
        font-size: 40px;
        cursor: not-allowed;
      }
    `}
`;

export const StyledHighlightFilled = styled(({ disabled, iconColor, ...props }) => <HighlightFilled {...props} />)`
  font-size: 25px;
  color: ${({ iconColor }) => iconColor};

  ${({ disabled }) =>
    disabled &&
    css`
      color: darkgray;
      cursor: not-allowed;
    `}
`;

export const StyledHighlightOutlined = styled(({ disabled, overlayIconColor, ...props }) => (
  <HighlightOutlined {...props} />
))`
  color: ${({ overlayIconColor }) => overlayIconColor};
  position: absolute;
  z-index: 9;
  font-size: 25px;
  left: 0;
  ${({ disabled }) =>
    disabled &&
    css`
      color: darkgray;
      cursor: not-allowed;
    `}
`;

export const StyledColorPickerBlockCol = styled((props) => <Col {...props} />)`
  height: 30px;
  cursor: pointer;
  padding-top: 0;
  margin-left: 10px;
`;

export const StyledColorBlock = styled(({ disabled, colorRgba, blockSelected, ...props }) => (
  <Col {...props} span={1} />
))`
  background-color: ${({ colorRgba }) => `rgba(${colorRgba.slice(5, colorRgba.length - 1)})`};
  border: ${({ blockSelected }) => (blockSelected ? "2px" : "1px")} solid black;
  border-radius: 3.5px;
  height: 15px;
  cursor: pointer;
  margin-bottom: 10px;
  &:not(:first-child) {
    margin-left: 5px;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: darkgray;
      cursor: not-allowed;
    `}
`;

export const StyledColorSliderRow = styled((props) => <Row {...props} />)`
  margin-bottom: 10px;
`;

export const ChromePickerRow = styled((props) => <Row {...props} />)`
  position: absolute;
  z-index: 9;
`;

export const StyledCol = styled((props) => <Col {...props} />)``;
export const StyledColorBarCol = styled(({ disabled, currentColor, blockSelected, ...props }) => <Col {...props} />)`
  height: 40px;
  background-color: ${({ currentColor }) => currentColor};
  border-radius: 10px;
  border: ${({ blockSelected }) => (blockSelected ? 1 : 2)}px solid gray;
  text-align: center;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: darkgray;
      cursor: not-allowed;
    `}
`;

export const StyledRowCurrentColorTitle = styled((props) => <Row {...props} />)``;
export const StyledRow = styled((props) => <Row {...props} />)`
  margin-bottom: 10px;
`;

export const StyledSlider = styled((props) => <Slider {...props} />)``;

export const StyledInputNumber = styled((props) => <InputNumber {...props} />)`
  width: 100%;
`;

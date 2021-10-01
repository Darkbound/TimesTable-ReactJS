import {
  StyledColorSliderRow,
  StyledHighlightFilled,
  StyledHighlightOutlined,
  StyledCol,
  StyledSlider,
  StyledInputNumber,
} from "./elements";

import { rgbaStringToRgbaObj } from "../../../helpers";

export const ColorSlider = ({
  disabled,
  colorSliderOnChange,
  colorPropName,
  color,
  min = 0,
  max = 255,
  step = 1,
  ...props
}) => {
  const rgbaColorObj = rgbaStringToRgbaObj(color);

  const iconColor =
    colorPropName !== "a"
      ? `rgba(
      ${colorPropName === "r" ? 255 : 255 - rgbaColorObj[colorPropName]},
      ${colorPropName === "g" ? 255 : 255 - rgbaColorObj[colorPropName]}, 
      ${colorPropName === "b" ? 255 : 255 - rgbaColorObj[colorPropName]}, 
      1
    )`
      : `rgba(0,0,0, ${rgbaColorObj[colorPropName]})`;

  const overlayIconColor = `rgba(
      ${colorPropName === "r" ? 255 : 0},
      ${colorPropName === "g" ? 255 : 0}, 
      ${colorPropName === "b" ? 255 : 0}, 
      1
    )`;

  const handleOnChange = (value) => {
    colorSliderOnChange({ value, colorPropName });
  };

  return (
    <>
      <StyledColorSliderRow {...props} justify="center">
        <StyledCol span={2}>
          <StyledHighlightFilled disabled={disabled} iconColor={iconColor} />
          <StyledHighlightOutlined disabled={disabled} overlayIconColor={overlayIconColor} />
        </StyledCol>
        <StyledCol span={14} offset={1}>
          <StyledSlider
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            value={rgbaColorObj[colorPropName]}
            onAfterChange={handleOnChange}
          />
        </StyledCol>
        <StyledCol span={6} offset={1}>
          <StyledInputNumber
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            value={rgbaColorObj[colorPropName]}
            onChange={handleOnChange}
          />
        </StyledCol>
      </StyledColorSliderRow>
    </>
  );
};

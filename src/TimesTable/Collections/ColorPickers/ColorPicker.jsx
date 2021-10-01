import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { Typography } from "antd";
import { rgbaObjToRgbaString, setColorValueInRgbaString, generateRandomRgbaColorsArray } from "../../../helpers";

import { ColorSlider } from "./ColorSlider";
import { ColorBlock } from "./ColorBlock";
import { ColorPickerBlock } from "./ColorPickerBlock";
import { StyledCol, StyledRow, StyledRowCurrentColorTitle, StyledColorBarCol, ChromePickerRow } from "./elements";

const { Title } = Typography;

const predefinedColors = [
  [
    "rgba(255,0,0,1)",
    "rgba(0,255,0,1)",
    "rgba(0,0,255,1)",
    "rgba(0,0,0,1)",
    "rgba(255,255,255,1)",
    ...generateRandomRgbaColorsArray(13),
  ],
  generateRandomRgbaColorsArray(18),
];

export function ColorPicker({ setColorWrapper, text, currentColor, disabled }) {
  const [colorPickerOpened, setColorPickerOpened] = useState(false);

  const handleSetColorPickerOpened = () => {
    !disabled && setColorPickerOpened(!colorPickerOpened);
  };

  const colorSliderOnChange = ({ value, colorPropName }) => {
    const newColorString = setColorValueInRgbaString({
      colorString: currentColor,
      colorName: colorPropName,
      colorValue: value,
    });

    setColorWrapper(newColorString);
  };

  const handleColorBlockOnClick = (rgbaColor) => {
    setColorWrapper(rgbaColor);
  };

  const handleChromePickerOnChangeComplete = (color) => {
    const colorString = rgbaObjToRgbaString(color.rgb);

    setColorWrapper(colorString);
  };

  return (
    <>
      {colorPickerOpened && (
        <ChromePickerRow>
          <ChromePicker color={currentColor} onChangeComplete={handleChromePickerOnChangeComplete} />
        </ChromePickerRow>
      )}
      <StyledRowCurrentColorTitle>
        <StyledCol span={8}>
          <Title level={3}>{`${text[0].toUpperCase()}${text.slice(1)}`} Color:</Title>
        </StyledCol>
        <StyledCol span={14} offset={1}>
          <Title level={4}>{currentColor}</Title>
        </StyledCol>
      </StyledRowCurrentColorTitle>
      <StyledRow justify="center" style={{ marginBottom: 10 }}>
        <StyledCol span={21}>
          {predefinedColors.map((colorsArray, index) => (
            <StyledRow key={`colorblockrow${index}`}>
              {colorsArray.map((colorRgba, secondIndex) => (
                <ColorBlock
                  key={`colorblock${index}${secondIndex + index}`}
                  colorRgba={colorRgba}
                  disabled={disabled}
                  onClick={handleColorBlockOnClick}
                  blockSelected={colorRgba === currentColor}
                />
              ))}
            </StyledRow>
          ))}
        </StyledCol>
        <StyledCol span={3}>
          <ColorPickerBlock
            onClick={handleSetColorPickerOpened}
            colorPickerOpened={colorPickerOpened}
            disabled={disabled}
          />
        </StyledCol>
      </StyledRow>
      <StyledRow align="middle" justify="center" style={{ marginBottom: 10 }}>
        <StyledColorBarCol disabled={disabled} span={24} currentColor={currentColor} />
      </StyledRow>
      <ColorSlider
        disabled={disabled}
        min={0}
        max={255}
        color={currentColor}
        colorPropName="r"
        colorSliderOnChange={colorSliderOnChange}
      />
      <ColorSlider
        disabled={disabled}
        min={0}
        max={255}
        color={currentColor}
        colorPropName="g"
        colorSliderOnChange={colorSliderOnChange}
      />
      <ColorSlider
        disabled={disabled}
        min={0}
        max={255}
        color={currentColor}
        colorPropName="b"
        colorSliderOnChange={colorSliderOnChange}
      />
      <ColorSlider
        disabled={disabled}
        min={0}
        max={1}
        step={0.01}
        color={currentColor}
        colorPropName="a"
        colorSliderOnChange={colorSliderOnChange}
      />
    </>
  );
}

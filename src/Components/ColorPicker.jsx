import React, { useState } from "react";
import styled from "styled-components";
import { ChromePicker } from "react-color";
import { Row, Col, Slider, InputNumber, Typography } from "antd";

import { HighlightTwoTone, BgColorsOutlined } from "@ant-design/icons";

const { Title } = Typography;

const rgbaStringToRgbaObj = (rgbaString) => {
  const [r, g, b, a] = rgbaString.slice(5, rgbaString.length - 1).split(",");

  return { r, g, b, a };
};

const rgbaObjToRgbaString = ({ r, g, b, a }) => {
  return `rgba(${r},${g},${b},${a})`;
};

const setColorValueInRgbaString = ({ colorString, colorName, colorValue }) => {
  console.log("in function", colorString);
  const newColorObj = rgbaStringToRgbaObj(colorString);

  newColorObj[colorName] = colorValue;

  const newColorString = rgbaObjToRgbaString(newColorObj);

  return newColorString;
};

const predefinedColors = [
  "rgba(255,0,0,1)",
  "rgba(0,255,0,1)",
  "rgba(0,0,255,1)",
  "rgba(0,208,205,1)",
  "rgba(247,255,99,1)",
  "rgba(255,0,230,1)",
  "rgba(255,180,0,1)",
  "rgba(50,187,250,1)",
];

export default function ColorPicker({ setColorWrapper, text, currentColor }) {
  const [colorPickerOpened, setColorPickerOpened] = useState(false);

  const handleSetColorPickerOpened = () => {
    setColorPickerOpened(!colorPickerOpened);
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
    console.log(colorString);
    setColorWrapper(colorString);
  };

  /**
   * Color modes:
   * Static
   * Rainbow
   * Alternating
   * Random color per line (defining set of colors)
   *
   */

  return (
    <>
      {colorPickerOpened && (
        <ChromePickerRow>
          <ChromePicker color={currentColor} onChangeComplete={handleChromePickerOnChangeComplete} />
        </ChromePickerRow>
      )}
      <Row justify="center">
        <Col span={8}>
          <Title level={3}>{`${text[0].toUpperCase()}${text.slice(1)}`} Color:</Title>
        </Col>
        <Col span={14} offset={1}>
          <Title level={4}>{currentColor}</Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginBottom: 10 }}>
        {predefinedColors.map(
          (colorRgba, index) =>
            index < 8 && (
              <ColorBlock key={`colorblock${index}`} colorRgba={colorRgba} onClick={handleColorBlockOnClick} />
            )
        )}
        <ColorPickerBlock onClick={handleSetColorPickerOpened} />
      </Row>
      <Row align="middle" justify="center" style={{ marginBottom: 10 }}>
        <Col
          span={24}
          style={{
            height: 40,
            backgroundColor: currentColor,
            borderRadius: 10,
            border: "1px solid gray",
            textAlign: "center",
          }}
        />
      </Row>
      <ColorSlider min={0} max={255} color={currentColor} colorPropName="r" colorSliderOnChange={colorSliderOnChange} />
      <ColorSlider min={0} max={255} color={currentColor} colorPropName="g" colorSliderOnChange={colorSliderOnChange} />
      <ColorSlider min={0} max={255} color={currentColor} colorPropName="b" colorSliderOnChange={colorSliderOnChange} />
      <ColorSlider
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

const ColorSlider = ({ colorSliderOnChange, colorPropName, color, min = 0, max = 255, step = 1 }) => {
  const rgbaColorObj = rgbaStringToRgbaObj(color);

  const iconColor = `rgba(
    ${colorPropName === "r" ? 255 : rgbaColorObj[colorPropName]},
    ${colorPropName === "g" ? 255 : rgbaColorObj[colorPropName]}, 
    ${colorPropName === "b" ? 255 : rgbaColorObj[colorPropName]}, 
    1
  )`;

  return (
    <>
      <Row style={{ marginBottom: 10 }} justify="center">
        <Col span={2}>
          <HighlightTwoTone twoToneColor={iconColor} style={{ fontSize: 25, color: "black" }} />
        </Col>
        <Col span={14} offset={1}>
          <Slider
            min={min}
            max={max}
            step={step}
            value={rgbaColorObj[colorPropName]}
            onChange={(value) => colorSliderOnChange({ value, colorPropName })}
          />
        </Col>
        <Col span={6} offset={1}>
          <InputNumber
            style={{ width: "100%" }}
            min={min}
            max={max}
            step={step}
            value={rgbaColorObj[colorPropName]}
            onChange={(value) => colorSliderOnChange({ value, colorPropName })}
          />
        </Col>
      </Row>
    </>
  );
};

const ColorBlock = ({ colorRgba, onClick }) => (
  <StyledColorBlock
    onClick={() => {
      onClick(colorRgba);
    }}
    style={{ backgroundColor: colorRgba }}
  />
);

const StyledColorBlock = styled((props) => <Col {...props} span={2} />)`
  border: 1px solid black;
  border-radius: 5px;
  height: 30px;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const ColorPickerBlock = ({ onClick }) => {
  return (
    <Col onClick={onClick} span={2} style={{ height: 30, cursor: "pointer", marginLeft: 10, paddingTop: 5 }}>
      <BgColorsOutlined style={{ fontSize: 25 }} />
    </Col>
  );
};

const ChromePickerRow = styled((props) => <Row {...props} />)`
  position: absolute;
  z-index: 9;
`;

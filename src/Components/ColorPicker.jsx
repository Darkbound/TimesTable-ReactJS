import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { RgbaColorPicker } from "react-colorful";

export default function ColorPicker({ setColorWrapper, text }) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState();
  // console.log(color);

  const handleColorChange = (color) => {
    setColor(color);
    setColorWrapper(color);
  };

  const handleShowColorPicker = () => {
    setShowColorPicker((shown) => !shown);
  };

  return showColorPicker ? (
    <>
      <SketchPicker color={color} onChangeComplete={handleColorChange} />

      <button onClick={handleShowColorPicker}>{`Hide ${text} color picker`}</button>
    </>
  ) : (
    <button onClick={handleShowColorPicker}>{`Show ${text} color picker`}</button>
  );
}

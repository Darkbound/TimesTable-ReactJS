import { getRandomInt, getRandomFloat } from "./mathHelper";

export const rgbaStringToRgbaObj = (rgbaString) => {
  const [r, g, b, a] = rgbaString.slice(5, rgbaString.length - 1).split(",");

  return { r, g, b, a };
};

export const rgbaObjToRgbaString = ({ r, g, b, a }) => {
  return `rgba(${r},${g},${b},${a})`;
};

export const setColorValueInRgbaString = ({ colorString, colorName, colorValue }) => {
  const newColorObj = rgbaStringToRgbaObj(colorString);

  newColorObj[colorName] = colorValue;

  const newColorString = rgbaObjToRgbaString(newColorObj);

  return newColorString;
};

export const generateRandomRgbaColorsArray = (length) =>
  Array.from(Array(length).keys()).map(
    (_) =>
      `rgba(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomFloat(0.3, 1).toFixed(
        2
      )})`
  );

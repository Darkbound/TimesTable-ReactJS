import { generateRangeArray } from "./mathArraysHelper";

function generateRadiansArray(R, start, end, step) {
  const arr = generateRangeArray(start, end, { step, callback: degToRad });

  return arr.map((val) => {
    return {
      x: numberToPrecision(R * Math.cos(val), 4),
      y: numberToPrecision(R * Math.sin(val), 4),
    };
  });
}

function getAngleStep(points) {
  return 360 / points;
}

function getAngleOfPointOnCircle(point, step) {
  return degToRad(point * step);
}

function numberToPrecision(number, precision) {
  // old way was: parseFloat(parseFloat(number).toFixed(precision))
  // if used on x/y calculations performance improvement in total calculation time for new datasets is 5 times!
  return Math.round(parseFloat(number) * Math.pow(10, precision)) / Math.pow(10, precision);
}

function degToRad(degrees) {
  return (Math.PI * degrees) / 180;
}

export { generateRadiansArray, getAngleOfPointOnCircle, numberToPrecision, degToRad, getAngleStep };

// PARSING STRING FLOATING POINT NUMBERS PERFORMANCE TESTS
// function parsetest1(number) {
//   parseFloat(parseFloat(number).toFixed(4));
// }

// function parsetest2(numb, precision) {
//   parseFloat(numb.substring(0, numb.indexOf(".") + precision + 1));
// }

// function parsetest3(numb, precision) {
//   return Math.round(parseFloat(numb) * Math.pow(10, precision)) / Math.pow(10, precision);
// }

// const numbers = Array.from({ length: 5000 }, () => Math.random() * 40);
// const stringNumbers = numbers.map((num) => num.toString());

// console.time("parse1");
// stringNumbers.forEach((number) => parsetest1(number));
// console.timeEnd("parse1");

// console.time("parse2");
// stringNumbers.forEach((number) => parsetest2(number, 4));
// console.timeEnd("parse2");

// console.time("parse3");
// stringNumbers.forEach((number) => parsetest3(number, 4));
// console.timeEnd("parse3");

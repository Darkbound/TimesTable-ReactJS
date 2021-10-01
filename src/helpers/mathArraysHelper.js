function generateRangeArray(start, end, options) {
  const defaultCallback = (i) => {
    return i;
  };
  const defaultStep = 1;

  let callback;
  let step;

  if (typeof options !== "undefined") {
    callback = typeof options.callback !== "undefined" ? options.callback : defaultCallback;
    step = typeof options.step !== "undefined" ? options.step : defaultStep;
  } else {
    callback = defaultCallback;
    step = defaultStep;
  }

  const arr = [];

  for (let i = start; i <= end; i = i + step) {
    arr.push(callback(i));
  }

  return arr;
}

export { generateRangeArray };

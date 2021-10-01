export const setSpeedMode = ({ speedMode, speed, increments }) => ({
  type: speedMode,
  payload: { speed, increments },
});

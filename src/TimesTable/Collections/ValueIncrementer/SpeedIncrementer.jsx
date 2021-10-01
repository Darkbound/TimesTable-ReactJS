import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setSpeed } from "../../../actions/animationOptionsActions";
import { setSpeedMode } from "../../../actions/speedModeActions";
import { SPEED_MODES } from "../../../Enums/Actions";
import { ValueIncrementer } from ".";

const { MANUAL } = SPEED_MODES;

export const SpeedIncrementer = () => {
  const { speed } = useSelector((state) => state.animationOptions, shallowEqual);
  const { speedMode } = useSelector((state) => state.speedMode, shallowEqual);

  const dispatch = useDispatch();

  const handleOnIncrement = () => {
    speedMode !== MANUAL && dispatch(setSpeedMode({ speedMode: MANUAL }));
  };

  const handleOnDecrement = () => {
    speedMode !== MANUAL && dispatch(setSpeedMode({ speedMode: MANUAL }));
  };

  return (
    <ValueIncrementer
      nonStandardIncrements={[5, 25, 50, 100]}
      defaultIncrements={[0.1, 1, 10]}
      valueChangingActionToDispatch={setSpeed}
      currentValue={speed}
      min={0.001}
      max={500}
      onIncrement={handleOnIncrement}
      onDecrement={handleOnDecrement}
    />
  );
};

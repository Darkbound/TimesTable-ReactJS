import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setIncrements } from "../../../actions/animationOptionsActions";
import { setSpeedMode } from "../../../actions/speedModeActions";
import { SPEED_MODES } from "../../../Enums/Actions";
import { ValueIncrementer } from ".";

const { MANUAL } = SPEED_MODES;

export const IncrementsIncrementer = () => {
  const dispatch = useDispatch();
  const { increments } = useSelector((state) => state.animationOptions, shallowEqual);
  const { speedMode } = useSelector((state) => state.speedMode, shallowEqual);

  const handleOnIncrement = () => {
    speedMode !== MANUAL && dispatch(setSpeedMode({ speedMode: MANUAL }));
  };

  const handleOnDecrement = () => {
    speedMode !== MANUAL && dispatch(setSpeedMode({ speedMode: MANUAL }));
  };

  return (
    <ValueIncrementer
      nonStandardIncrements={[0.0001, 0.001, 0.05, 0.5, 0.75]}
      defaultIncrements={[0.01, 0.1, 1]}
      valueChangingActionToDispatch={setIncrements}
      currentValue={increments}
      min={0.0001}
      max={1}
      onIncrement={handleOnIncrement}
      onDecrement={handleOnDecrement}
    />
  );
};

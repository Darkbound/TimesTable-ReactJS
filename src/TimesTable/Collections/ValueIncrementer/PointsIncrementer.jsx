import { useSelector, shallowEqual } from "react-redux";
import { ValueIncrementer } from ".";
import { setPoints } from "../../../actions/animationOptionsActions";

export const PointsIncrementer = () => {
  const { points } = useSelector((state) => state.animationOptions, shallowEqual);

  return (
    <ValueIncrementer
      defaultIncrements={[10, 50, 150]}
      nonStandardIncrements={[1, 20, 100, 300, 500, 1000]}
      valueChangingActionToDispatch={setPoints}
      currentValue={points}
      min={10}
      max={1000}
    />
  );
};

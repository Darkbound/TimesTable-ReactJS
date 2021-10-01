import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  StyledRow,
  StyledCol,
  StyledRadioGroup,
  StyledRadioButton,
  StyledVerticalSpace,
  StyledTitle,
} from "./elements";
import { setSpeed, setIncrements } from "../../../actions/animationOptionsActions";
import { setSpeedMode } from "../../../actions/speedModeActions";
import { SPEED_MODES } from "../../../Enums/Actions";

const { VERY_FAST, FAST, NORMAL, SLOW, VERY_SLOW, MANUAL } = SPEED_MODES;
const speedPresets = [
  { label: "Very fast", value: { mode: VERY_FAST, speed: 50, increments: 1 } },
  { label: "Fast", value: { mode: FAST, speed: 100, increments: 0.5 } },
  { label: "Normal", value: { mode: NORMAL, speed: 100, increments: 0.1 } },
  { label: "Slow", value: { mode: SLOW, speed: 100, increments: 0.0007 } },
  { label: "Very slow", value: { mode: VERY_SLOW, speed: 200, increments: 0.0003 } },
];

export const SpeedPreset = () => {
  const dispatch = useDispatch();
  const { speedMode } = useSelector((state) => state.speedMode, shallowEqual);
  const [selectedSpeedMode, setSelectedSpeedMode] = useState(NORMAL);

  useEffect(() => {
    speedMode === MANUAL && setSelectedSpeedMode(null);
  }, [speedMode]);

  const handleSetSpeedOnChange = ({ target }) => {
    const newMode = target.value;
    const {
      value: { speed, increments, mode },
    } = speedPresets.find(({ value }) => value.mode === newMode);
    dispatch(setSpeed(speed));
    dispatch(setIncrements(increments));
    dispatch(setSpeedMode({ speedMode: mode }));
    setSelectedSpeedMode(mode);
  };

  return (
    <>
      <StyledRow>
        <StyledTitle level={5}>Speed:</StyledTitle>
      </StyledRow>
      <StyledRow>
        <StyledCol>
          <StyledRadioGroup onChange={handleSetSpeedOnChange} value={selectedSpeedMode}>
            <StyledVerticalSpace>
              {speedPresets.map(({ label, value }, index) => (
                <StyledRadioButton key={`rbs${index}${label}`} value={value.mode}>
                  {label}
                </StyledRadioButton>
              ))}
            </StyledVerticalSpace>
          </StyledRadioGroup>
        </StyledCol>
      </StyledRow>
    </>
  );
};

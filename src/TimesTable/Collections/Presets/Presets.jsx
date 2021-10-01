import { useSelector, shallowEqual } from "react-redux";

import { ColorPreset } from "./ColorPreset";
import { StyledTitle, StyledRow, StyledCol } from "./elements";
import { SpeedPreset } from "./SpeedPreset";

export const Presets = () => {
  const { coloringMode } = useSelector((state) => state.animationOptions, shallowEqual);

  return (
    <>
      <StyledRow>
        <StyledTitle level={3}>Presets:</StyledTitle>
      </StyledRow>
      <StyledRow>
        <StyledCol span={12}>
          <SpeedPreset />
        </StyledCol>
        <StyledCol span={12}>
          <ColorPreset currentColoringMode={coloringMode} />
        </StyledCol>
      </StyledRow>
    </>
  );
};

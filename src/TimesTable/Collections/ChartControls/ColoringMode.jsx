import { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setColoringMode } from "../../../actions/animationOptionsActions";
import {
  StyledTitle,
  StyledRow,
  StyledCol,
  StyledRadioGroup,
  StyledAlternatingBlock,
  StyledRainbowBlock,
  StyledRadioButtonStaticColorMode,
  StyledRadioButtonAlternatingColorMode,
  StyledRadioButtonRainbowColorMode,
  StyledCheckCircleOutlined,
} from "./elements";
import { generateRangeArray } from "../../../helpers";

import { COLORING_MODES } from "../../../Enums/Actions";

const { ALTERNATING, RAINBOW, STATIC } = COLORING_MODES;

const coloringPresets = [
  { label: "Alternating", value: ALTERNATING },
  { label: "Static", value: STATIC },
  { label: "Rainbow", value: RAINBOW },
];

export const ColoringMode = () => {
  const dispatch = useDispatch();
  const [selectedColoringMode, setSelectedColoringMode] = useState(STATIC);
  const { lineColor, fillColor } = useSelector((state) => state.animationOptions, shallowEqual);

  const handleSetColoringModeOnChange = ({ target }) => {
    const { value } = target;

    dispatch(setColoringMode({ coloringMode: value }));
    setSelectedColoringMode(value);
  };

  return (
    <>
      <StyledRow>
        <StyledCol span={24}>
          <StyledTitle level={3}>Coloring mode:</StyledTitle>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol span={24}>
          <StyledRadioGroup onChange={handleSetColoringModeOnChange} value={selectedColoringMode} size="large">
            <StyledRadioButtonStaticColorMode
              value={coloringPresets[1].value}
              lineColor={lineColor}
              fillColor={fillColor}
            >
              {selectedColoringMode === STATIC && <StyledCheckCircleOutlined />}
            </StyledRadioButtonStaticColorMode>
            <StyledRadioButtonAlternatingColorMode
              value={coloringPresets[0].value}
              lineColor={lineColor}
              fillColor={fillColor}
            >
              <div>
                {generateRangeArray(0, 7).map((_, index) => (
                  <StyledAlternatingBlock index={index} lineColor={lineColor} fillColor={fillColor} />
                ))}

                {selectedColoringMode === ALTERNATING && <StyledCheckCircleOutlined />}
              </div>
            </StyledRadioButtonAlternatingColorMode>
            <StyledRadioButtonRainbowColorMode value={coloringPresets[2].value}>
              <StyledRainbowBlock>
                {selectedColoringMode === RAINBOW && <StyledCheckCircleOutlined />}
              </StyledRainbowBlock>
            </StyledRadioButtonRainbowColorMode>
          </StyledRadioGroup>
        </StyledCol>
      </StyledRow>
    </>
  );
};

import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  StyledRow,
  StyledCol,
  StyledChart,
  StyledChartStateControls,
  StyledColorPicker,
  StyledControls,
  StyledPresets,
} from "./elements";

import { setLineColor, setFillColor } from "../actions/animationOptionsActions";
import { COLORING_MODES } from "../Enums/Actions";

const { RAINBOW } = COLORING_MODES;

export const TimesTable = () => {
  const dispatch = useDispatch();
  const { fillColor, lineColor, coloringMode } = useSelector((state) => state.animationOptions, shallowEqual);
  const manualColorsDisabled = coloringMode === RAINBOW;

  const setLineColorWrapper = (newColor) => {
    dispatch(setLineColor(newColor));
  };

  const setFillColorWrapper = (newColor) => {
    dispatch(setFillColor(newColor));
  };

  return (
    <>
      <StyledRow>
        <StyledCol span={10}>
          <StyledChart />
        </StyledCol>
        <StyledCol span={14}>
          <StyledRow>
            <StyledCol span={7}>
              <StyledChartStateControls />
            </StyledCol>
            <StyledCol span={6}>
              <StyledPresets />
            </StyledCol>
            <StyledCol span={11}>
              <StyledControls />
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledCol span={11}>
              <StyledColorPicker
                disabled={manualColorsDisabled}
                currentColor={lineColor}
                text={`line`}
                setColorWrapper={setLineColorWrapper}
              />
            </StyledCol>
            <StyledCol span={11} offset={1}>
              <StyledColorPicker currentColor={fillColor} text={`fill`} setColorWrapper={setFillColorWrapper} />
            </StyledCol>
          </StyledRow>
        </StyledCol>
      </StyledRow>
    </>
  );
};

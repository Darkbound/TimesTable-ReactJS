import { useDispatch } from "react-redux";
import { setLineColor, setFillColor } from "../../../actions/animationOptionsActions";
import {
  StyledTitle,
  StyledRow,
  StyledCol,
  StyledRadioGroup,
  StyledRadioButtonColorPreset,
  StyledVerticalSpace,
} from "./elements";
import { COLORING_MODES } from "../../../Enums/Actions";

const { RAINBOW } = COLORING_MODES;

const colorsPresets = [
  { label: "Green/Blue", value: { lineColor: "rgba(0,0,255,1)", fillColor: "rgba(0,255,0,1)" } },
  { label: "Yellow/Orange", value: { lineColor: "rgba(222,227,62,0.66)", fillColor: "rgba(220,98,17,0.94)" } },
  { label: "Red/Yellow", value: { lineColor: "rgba(255,0,0,1)", fillColor: "rgba(217,246,134,0.79)" } },
  { label: "Blue/Purple", value: { lineColor: "rgba(62,203,232,0.99)", fillColor: "rgba(69,16,231,0.59)" } },
  { label: "Pink/Yellow", value: { lineColor: "rgba(255,29,134,0.76)", fillColor: "rgba(195,203,158,1)" } },
];

export const ColorPreset = ({ currentColoringMode }) => {
  const dispatch = useDispatch();

  const handleSetColorsOnChange = ({ target }) => {
    const { lineColor, fillColor } = target.value;
    dispatch(setFillColor(fillColor));
    dispatch(setLineColor(lineColor));
  };

  const disabled = currentColoringMode === RAINBOW;

  return (
    <>
      <StyledRow>
        <StyledTitle level={5}>Colors:</StyledTitle>
      </StyledRow>
      <StyledRow>
        <StyledCol>
          <StyledRadioGroup disabled={disabled} size="small" onChange={handleSetColorsOnChange}>
            <StyledVerticalSpace direction="vertical">
              {colorsPresets.map(({ label, value }, index) => (
                <StyledRadioButtonColorPreset
                  fillColor={value.fillColor}
                  lineColor={value.lineColor}
                  key={`rbc${index}${label}`}
                  value={value}
                >
                  {label}
                </StyledRadioButtonColorPreset>
              ))}
            </StyledVerticalSpace>
          </StyledRadioGroup>
        </StyledCol>
      </StyledRow>
    </>
  );
};

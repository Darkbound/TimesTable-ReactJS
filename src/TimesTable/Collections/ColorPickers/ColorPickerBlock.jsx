import { StyledColorPickerBlockCol, StyledBGColorsOutlinedIcon } from "./elements";

export const ColorPickerBlock = ({ disabled, colorPickerOpened, ...props }) => {
  return (
    <StyledColorPickerBlockCol {...props}>
      <StyledBGColorsOutlinedIcon disabled={disabled} colorPickerOpened={colorPickerOpened} />
    </StyledColorPickerBlockCol>
  );
};
